import { FaXmark } from 'react-icons/fa6'
import './Favorites.scss'
import { productData } from '../../Constants/ProductData'
import { useContext } from 'react'
import { Context } from '../../Hooks/Context'
import ProductItem from '../ProductItem/ProductItem'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'react-bootstrap'

export default function Favorites() {
      const { favoriteProducts } = useContext(Context)
      return (
            <div className='favorites'>
                  <div className="content">
                        <Row >
                              <Col lg={12} >
                                    <div className="head">
                                          <h1 className='subTitle'>Избранные товары</h1>
                                    </div>
                              </Col>

                              <Col lg={12}>
                                    <Row>

                                          {favoriteProducts.length <= 0 ? <p className='noProduct'>Нет избранных товаров</p> :
                                                favoriteProducts.map(item =>
                                                      productData.map((element, index) =>
                                                            element.id === item ? <Col lg={3} key={index}> <ProductItem product={[element]} /></Col> : null
                                                      ))
                                          }

                                    </Row>
                              </Col>
                        </Row>
                  </div >
            </div >
      )
}

Favorites.propTypes = {
      active: PropTypes.bool.isRequired,
      setActive: PropTypes.func.isRequired
}