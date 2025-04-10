import { useContext, useState } from 'react'
import { Context } from '../../Hooks/Context'
import LeftModal from '../LeftModal/LeftModal';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBars, FaRegUser } from 'react-icons/fa';
import { navLinks } from '../../Constants/Data';
import { Link, useNavigate } from 'react-router-dom';
import TelephoneNumbers from '../TelephoneNumbers/TelephoneNumbers';
import LoginModal from '../LoginModal/LoginModal';
import logoWhite from '../../assets/img/Logo white.png'


export default function NavBarTop() {
      const { language, setLanguage, passRegister } = useContext(Context)
      const [toggleLeftModal, setToggleLeftModal] = useState(false);
      const [loginModalActive, setLoginModalActive] = useState(false)

      const navigate = useNavigate()
      return (
            <>
                  <div className="nav-top">
                        <Container >
                              <Row className=" justify-content-between align-items-center">
                                    <Col lg={9} xs={4} className="d-flex align-items-center gap-5">
                                          <button className="btn-leftMenu">
                                                <FaBars onClick={() => setToggleLeftModal(true)} />
                                          </button>

                                          <ul className='d-none d-lg-flex'>
                                                {navLinks.map(({ id, linkName_ru, slug, linkName_uz }) => {
                                                      return <li key={id}><Link to={slug} >{language == 'ru' ? linkName_ru : linkName_uz}</Link></li>
                                                })}
                                          </ul>
                                    </Col>

                                    <Col xs={4} className='d-lg-none d-block'>
                                          <Link to="/"><img src={logoWhite} alt="computer shop logo" /></Link>
                                    </Col>

                                    <Col lg={3} xs={4} className="d-flex align-items-center justify-content-end gap-5">
                                          <div className="change-language d-none d-sm-flex">
                                                <button onClick={() => setLanguage('ru')} className={language === 'ru' ? 'active' : null}>Ru</button>
                                                /
                                                <button onClick={() => setLanguage('uz')}
                                                      className={language === 'uz' ? 'active' : null}>Uz</button>
                                          </div>
                                          <div className='d-block d-sm-none'>
                                                <TelephoneNumbers />
                                          </div>
                                          <button className='btn-login d-none d-sm-block' onClick={() => passRegister ? navigate("/personal/Personal_information") : setLoginModalActive("login")}>
                                                <FaRegUser />
                                          </button>
                                    </Col>
                              </Row>
                        </Container >
                        <LoginModal login={loginModalActive} setLogin={setLoginModalActive} />
                        <LeftModal active={toggleLeftModal} setActive={setToggleLeftModal} />
                  </div>
            </>
      )
}
