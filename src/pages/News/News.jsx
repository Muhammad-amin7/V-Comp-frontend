import { useContext } from "react";
import { Context } from "../../Hooks/Context";
import { Col, Container, Row } from "react-bootstrap";
import { newsData } from "../../Constants/Data";
import "./News.scss";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function News() {
  const { language } = useContext(Context);
  const navigate = useNavigate()
  return (
    <div className="news_page">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="navigate">
              <button onClick={() => navigate('/')}>{language === 'uz' ? "Bosh sahifa" : "Главная"}</button>
              <FaChevronRight />
              <button className="active" onClick={() => navigate('/news')}>{language === 'uz' ? "Yangiliklar" : "Новости"}</button>
            </div>
          </Col>
          <Col lg={12}>
            <h1 className="title">{language === "uz" ? "Yangiliklar" : "Новости"}</h1>
          </Col>
        </Row>

        <Row>
          {newsData.map(({ id, image, title_ru, title_uz, text_ru, text_uz, date }) => {
            return (
              <Col lg={3} md={6} key={id}>
                <div className="news_item" onClick={() => navigate(`/news/NewsDetails/${id}`)}>
                  <img src={image[0]} alt="" />
                  <h3>{language === "ru" ? title_ru : title_uz}</h3>
                  <p className="text">{language === "uz" ? text_uz[0] : text_ru[0]}</p>
                  <p className="date">{date}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}
