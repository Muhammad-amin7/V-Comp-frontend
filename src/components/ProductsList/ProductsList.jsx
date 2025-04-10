import { Col, Container, Row } from 'react-bootstrap'
import { productData } from '../../Constants/ProductData'
import ProductItem from '../ProductItem/ProductItem'
import './ProductsList.scss'
import { FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import Slider from 'react-slick'

export default function ProductsList() {
      const [allProducts, setAllProducts] = useState(false)
      var settings = {
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                  {
                        breakpoint: 991,
                        settings: {
                              slidesToShow: 4,
                        }
                  },
                  {
                        breakpoint: 575,
                        settings: {
                              slidesToShow: 2.1,
                        }
                  }
            ]
      };
      return (
            <div className='productsList'>
                  <Container>
                        <Row>
                              <Col xs={12}>
                                    <h1 className="title">Топ продаж</h1>
                              </Col>
                              <Row className='d-flex '>
                                    <Slider {...settings}>
                                          {productData.slice(0, 6).map((item, index) => {
                                                return <ProductItem product={[item]} key={index} />
                                          })}
                                    </Slider>
                              </Row>

                              <Col xs={12}>
                                    <button className='btnAllProducts' onClick={() => setAllProducts(prev => !prev)}>Смотреть все товары <FaArrowRight /></button>
                              </Col>

                              {allProducts ? [...productData].reverse().map((item, index) => {
                                    return <Col lg={2} md={3} xs={6} key={index}><ProductItem product={[item]} /></Col>
                              }) : null}
                        </Row>
                  </Container>
            </div >
      )
}

