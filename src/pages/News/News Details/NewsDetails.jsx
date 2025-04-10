import { useNavigate, useParams } from "react-router-dom";
import { newsData } from "../../../Constants/Data";
import { Col, Container, Row } from "react-bootstrap";
import "./NewsDetails.scss";
import { useContext } from "react";
import { Context } from "../../../Hooks/Context";
import { FaChevronRight } from "react-icons/fa";

export default function NewsDetails() {
      const { id } = useParams();
      const item = newsData.find((item) => item.id === Number(id));
      const { language } = useContext(Context)
      const navigate = useNavigate()
      return (
            <div className="news_details">
                  <Container>
                        <Row className=" justify-content-center">
                              <Col lg="12">
                                    <div className="navigate">
                                          <button onClick={() => navigate('/')}>{language === 'uz' ? "Bosh sahifa" : "Главная"}</button>
                                          <FaChevronRight />
                                          <button onClick={() => navigate('/news')}>{language === 'uz' ? "Yangiliklar" : "Новости"}</button>
                                          <FaChevronRight />
                                          <button className="active" onClick={() => navigate(`/news/NewsDetails/${id}`)}>{language === 'uz' ? "Sharhlar" : "Обзоры"}</button>
                                    </div>
                              </Col>
                              <Col lg={8}>
                                    {item && (
                                          <div key={item.id} className="news_item">
                                                <h3>{language === "uz" ? item.title_uz : item.title_ru}</h3>
                                                <p className="date">{item.date}</p>
                                                <p className="text">{language === "uz" ? item.text_uz[0] : item.text_ru[0]}</p>
                                                <img src={item.image[0]} alt="" />
                                                <p className="text">{language === "uz" ? item.text_uz[1] : item.text_ru[1]}</p>
                                                <img src={item.image[1]} alt="" />
                                                <p className="text">{language === "uz" ? item.text_uz[2] : item.text_ru[2]}</p>
                                                <img src={item.image[2]} alt="" />
                                          </div>
                                    )}</Col>
                        </Row>
                  </Container>
            </div >
      )
}
