import { useContext, useEffect, useState } from 'react';
import './Navbar.scss'
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaRegUser } from "react-icons/fa";
import { FaScaleBalanced, FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/img/LOGO.png'
import SearchProducts from '../SearchProducts/SearchProducts';
import TelephoneNumbers from '../TelephoneNumbers/TelephoneNumbers';
import { Context } from '../../Hooks/Context';
import CatalogProductModal from '../CatalogProductModal/CatalogProductModal';
import Basket from '../Basket/Basket';
import { IoCart, IoCartOutline } from "react-icons/io5";
import { PiArrowSquareOut } from "react-icons/pi";
import NavBarTop from './NavBarTop';
import LoginModal from '../LoginModal/LoginModal';

export default function Navbar() {
      const { language, passRegister } = useContext(Context)
      const { addedCart, favoriteProducts } = useContext(Context)
      const [basketActive, setBasketActive] = useState(false)
      const [catalogModalActive, setCatalogModalActive] = useState(false)
      const [basketCount, setBasketCount] = useState(0)
      const [loginModalActive, setLoginModalActive] = useState(false)
      const [scrollYSize, setScrollSize] = useState(0)
      const navigate = useNavigate()
      const handleActiveScroll = () => {
            setScrollSize(window.scrollY)
      }
      useEffect(() => {
            window.addEventListener('scroll', handleActiveScroll)

            return () => {
                  window.removeEventListener('scroll', handleActiveScroll)
            }

      }, [scrollYSize])

      useEffect(() => {
            setBasketCount(0)
            addedCart.filter((item) => setBasketCount(prev => prev += item.count))
      }, [addedCart])

      return (
            <>
                  <nav >
                        <NavBarTop />

                        {/* Nav bottom */}
                        <div className="nav-bottom" style={{ top: scrollYSize < 20 ? "60px" : "0px" }} >
                              <Container >
                                    <Row className='align-items-center justify-content-between'>
                                          <Col lg='auto' className='d-none d-lg-block' >
                                                <Link to="/"><img src={logo} alt="computer shop logo" /></Link>
                                          </Col>

                                          <Col lg={2} md={2} sm={3} xs={2} className=' d-flex justify-content-center'>
                                                <button
                                                      onClick={() => { setCatalogModalActive(prev => !prev); setScrollSize(60); }}
                                                      className='btn-CatalogModal'
                                                      style={{ background: catalogModalActive && "#E93232" }}>
                                                      <span className='d-none d-md-block'>{catalogModalActive ?
                                                            (language === "ru" ? "закрыть" : "yopish") :
                                                            (language === 'ru' ? "КАТАЛОГ ТОВАРОВ" : "MAHSULOT TURLARI")}
                                                      </span>
                                                      {catalogModalActive ? <FaXmark /> : <PiArrowSquareOut />}
                                                </button>
                                          </Col>

                                          <Col sm={5} md={4} xs={2} className=''>
                                                <SearchProducts />
                                          </Col>

                                          <Col md='auto' className='d-none d-md-block'>
                                                <TelephoneNumbers />
                                          </Col>

                                          <Col sm='auto' xs={2}>
                                                <ul className="nav-icons ">
                                                      <li className='d-md-none d-sm-block d-none'><TelephoneNumbers /></li>
                                                      <li className='d-none d-sm-block'><FaScaleBalanced /></li>
                                                      <li className='d-none d-sm-block' onClick={() => navigate('/personal/Favorites')}>
                                                            {favoriteProducts.length == 0 ? <FaRegHeart /> : <FaHeart />}
                                                            {favoriteProducts.length !== 0 && <span className='count' style={{ background: "#E93232" }}>{favoriteProducts.length}</span>}
                                                      </li>
                                                      <li onClick={() => setBasketActive(true)}>
                                                            {basketCount !== 0 ? <IoCart /> : <IoCartOutline />}
                                                            {basketCount !== 0 && <span className='count' style={{ background: "#06A56C" }}>{basketCount}</span>}
                                                      </li>
                                                </ul>
                                          </Col>

                                          <Col xs={2} className="d-block d-sm-none">
                                                <button className='btn-login' onClick={() => passRegister ? navigate("/personal/Personal_information") : setLoginModalActive(true)}>
                                                      <FaRegUser />
                                                </button>
                                          </Col>
                                    </Row>
                              </Container >
                        </div>
                  </nav >

                  {/* Modals */}
                  <CatalogProductModal active={catalogModalActive} setActive={setCatalogModalActive} />
                  <LoginModal login={loginModalActive} setLogin={setLoginModalActive} />
                  <Basket active={basketActive} setActive={setBasketActive} />
            </>
      )
}