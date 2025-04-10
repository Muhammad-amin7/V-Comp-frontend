import { FaStar } from 'react-icons/fa'
import './ItemDetails.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Imgs from './DetailsComponents/Imgs/Imgs';
import Features from './DetailsComponents/Features/Features';
import Description from './DetailsComponents/Description/Description';
import RightTop from './DetailsComponents/RightTop/RightTop';
import Bonus from './DetailsComponents/Bonus/Bonus';
import ProductPrice from './DetailsComponents/ProductPrice/ProductPrice';
import Delivery from './DetailsComponents/Delivery/Delivery';
import CashTypes from './DetailsComponents/CashTypes/CashTypes';
import Garant from './DetailsComponents/Garant/Garant';
import CommentsList from './DetailsComponents/CommentsList/CommentsList';
import PropTypes from 'prop-types';

export default function ItemDetails({ item }) {
      if (!item) return <p style={{ marginTop: '500px' }}>noData</p>;

      return (
            <section className='itemDetails' key={item.id}>
                  <Container>
                        <Row>
                              <Col lg={12}>
                                    <div className="title">
                                          <div className="left">
                                                <h1>{item.name}</h1>
                                                <div className="stars">
                                                      {Array(item.stars).fill().map((_, index) => (
                                                            <FaStar className='yellow' key={index} />
                                                      ))}
                                                      {Array(5 - item.stars).fill().map((_, index) => (
                                                            <FaStar key={index} />
                                                      ))}
                                                      <p>Отзывов: {item.comment}</p>
                                                </div>
                                          </div>
                                          <p className="itemId">Код товара: {item.id}</p>
                                    </div>
                              </Col>

                              <Col lg={12}>
                                    <ul className='itemNav'>
                                          <li className='active'>Все о товаре</li>
                                          <li>Характеристики</li>
                                          <li>Отзывы</li>
                                          <li>Кредит</li>
                                    </ul>
                              </Col>

                              <Col lg={6}>
                                    <Row >
                                          <Col lg={12}>
                                                <Imgs item={item} />
                                          </Col>

                                          <Col lg={12}>
                                                <Features item={item} />
                                          </Col>

                                          <Col lg={12}>
                                                <Description item={item} />
                                          </Col>
                                    </Row>
                              </Col>

                              <Col lg={6}>
                                    <Row>
                                          <Col>
                                                <RightTop item={item} />
                                          </Col>

                                          {item.bonus &&
                                                <Col xs={12}>
                                                      <Bonus item={item} />
                                                </Col>
                                          }

                                          <Col lg={12}>
                                                <ProductPrice item={item} />
                                          </Col>

                                          <Col lg={12} >
                                                <Delivery />
                                          </Col>

                                          <Col xs={12}>
                                                <CashTypes />
                                          </Col>

                                          <Col xs={12}>
                                                <Garant />
                                          </Col>

                                          <Col xs={12}>
                                                <CommentsList />
                                          </Col>
                                    </Row>
                              </Col>
                        </Row>
                  </Container>
            </section>
      );
}

ItemDetails.propTypes = {
      item: PropTypes.object.isRequired
}