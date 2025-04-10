import { Col, Container, Row } from 'react-bootstrap'
import './Comments.scss'
import { useContext, useState } from 'react'
import { commentsData } from '../../Constants/CommentData'
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";
import InstagramContents from '../InstagramContents/InstagramContents';
import { Context } from '../../Hooks/Context';

export default function Comments() {
      // active Commen increment
      const [activeComment, setActiveComment] = useState(0)
      const { language } = useContext(Context)
      return (
            <section className='Comments'>
                  <Container>
                        <Row className='justify-content-center'>
                              <Col xl={5} lg={6} className='d-none d-sm-block'>
                                    <Row>
                                          <Col xs={12}><h1 className="title">{language === "uz" ? "Sharxlar" : 'Отзывы'}</h1></Col>

                                          <Col xl={12} className=' d-flex justify-content-center'>
                                                {commentsData.map(({ id, userName, photo, stars, date, comment, rating }, index) => {
                                                      return index === activeComment
                                                            && <div className="comment" key={id}>
                                                                  <div className="photo">
                                                                        <img src={photo} alt={userName + "img"} />
                                                                  </div>
                                                                  <div className="message">
                                                                        <div className="top">
                                                                              <h2>{userName}</h2>

                                                                              <div className="btns">
                                                                                    <button onClick={() => setActiveComment(prev => (prev - 1 + commentsData.length) % commentsData.length)}><FaArrowLeft /></button>
                                                                                    <span>{index + 1}/{commentsData.length}</span>
                                                                                    <button onClick={() => setActiveComment(prev => (prev + 1) % commentsData.length)}><FaArrowRight /></button>
                                                                              </div>
                                                                        </div>
                                                                        <p>{comment}</p>
                                                                        <div className="bottom">
                                                                              <div className="star">
                                                                                    {Array(stars).fill(null).map((_, index) => (
                                                                                          <FaStar key={index} className='yellow' />
                                                                                    ))}

                                                                                    {Array(5 - stars).fill(null).map((_, index) => (
                                                                                          <FaStar key={index} />
                                                                                    ))}
                                                                              </div>
                                                                              <p className="date">{date}</p>
                                                                        </div>
                                                                  </div>
                                                                  <div className="rating">
                                                                        <h4>{rating}</h4>
                                                                        <div className="star">
                                                                              {Array(stars).fill(null).map((_, index) => (
                                                                                    <FaStar key={index} className='yellow' />
                                                                              ))}

                                                                              {Array(5 - stars).fill(null).map((_, index) => (
                                                                                    <FaStar key={index} />
                                                                              ))}
                                                                        </div>
                                                                        <p>{commentsData.length} отзыва на Google</p>
                                                                  </div>
                                                            </div>
                                                })}
                                          </Col>
                                    </Row>
                              </Col>

                              <Col xl={7} lg={6} >
                                    <InstagramContents />
                              </Col>
                        </Row>
                  </Container>
            </section>
      )
}
