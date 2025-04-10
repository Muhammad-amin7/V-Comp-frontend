import { Col, Container, Row } from 'react-bootstrap'
import './NewsHome.scss'
import { newsData } from '../../Constants/Data'
import { FaArrowRight } from "react-icons/fa";
import { useContext } from 'react';
import { Context } from '../../Hooks/Context';
import { useNavigate } from 'react-router-dom';


export default function NewsHome() {
      const navigate = useNavigate()
      const { language } = useContext(Context)
      return (
            <div className='newsHome'>
                  <Container>
                        <Row>
                              <Col lg={12}>
                                    <h1 className="title">
                                          {language === "uz" ? "Yangiliklar" : "Новости"}
                                    </h1>
                              </Col>

                              {newsData.slice(0, 4).map(({ id, image, title_ru, title_uz, text_ru, text_uz, date }) => {
                                    return <Col lg={3} xs={6} key={id} >
                                          <div className="newsItem" onClick={() => navigate(`/news/NewsDetails/${id}`)}>
                                                <img src={image[0]} alt="" />
                                                <h3>{language === 'ru' ? title_ru : title_uz}</h3>
                                                <p className="text">{language === "uz" ? text_uz[0] : text_ru[0]}</p>
                                                <div className="bottom">
                                                      <p className="date">{date}</p>
                                                      <button>Читать полностью <FaArrowRight /></button>
                                                </div>
                                          </div>
                                    </Col>
                              })}
                        </Row>
                  </Container>
            </div>
      )
}
