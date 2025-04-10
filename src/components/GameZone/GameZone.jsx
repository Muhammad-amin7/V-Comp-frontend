import { Col, Container, Row } from 'react-bootstrap'
import './GameZone.scss'
import ProductItem from '../ProductItem/ProductItem'
import { productData } from '../../Constants/ProductData'
import img6 from "../../assets/img/gaming (6).png"
import img1 from "../../assets/img/gaming (1).png"
import img2 from "../../assets/img/gaming (2).png"
import img3 from "../../assets/img/gaming (3).png"
import img4 from "../../assets/img/gaming (4).png"
import img5 from "../../assets/img/gaming (5).png"
import { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { Context } from '../../Hooks/Context'
export default function GameZone() {
      const [showItems, setShowItems] = useState(6)
      const { language } = useContext(Context)
      useEffect(() => {
            const updateItems = () => {
                  if (window.innerWidth <= 575) {
                        setShowItems(2);
                  }
                  else if (window.innerWidth <= 767) {
                        setShowItems(3);
                  } else if (window.innerWidth <= 991) {
                        setShowItems(4);
                  } else {
                        setShowItems(6);
                  }
            };

            updateItems();
            window.addEventListener("resize", updateItems);

            return () => {
                  window.removeEventListener("resize", updateItems);
            };
      }, []);

      var settings = {
            dots: false,
            infinite: true,
            nav: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                  {
                        breakpoint: 991,
                        settings: {
                              slidesToShow: 3,
                        }
                  },
                  {
                        breakpoint: 575,
                        settings: {
                              slidesToShow: 3.1,
                        }
                  },
            ]
      };

      const gamingCategory = [
            { id: 0, name_ru: "Клавиатуры", name_uz: "Klaviaturalar", image: img6 },
            { id: 1, name_ru: "Мыши", name_uz: "Sichqonchalar", image: img5 },
            { id: 2, name_ru: "Аксессуары", name_uz: "Aksessuarlar", image: img4 },
            { id: 3, name_ru: "Игровые ноутбуки", name_uz: "O'yin noutbuklari", image: img3 },
            { id: 4, name_ru: "Видеокарты", name_uz: "Videokartalar", image: img2 },
            { id: 5, name_ru: "Мониторы", name_uz: "Monitorlar", image: img1 },
      ]
      return (
            <div className='gameZone'>
                  <Container >
                        <Row >
                              <Col xs={12}>
                                    <h1>Game Zone</h1>
                              </Col>
                              <Row >
                                    {productData.slice(0, showItems).map((item, index) => {
                                          return <Col key={index} lg={2} md={3} sm={4} xs={6}>
                                                <ProductItem product={[item]} />
                                          </Col>
                                    })}
                              </Row>
                        </Row>

                        <Row className='justify-content-center'>
                              <Col xs={12} >
                                    <h2>{language === "ru" ? "Категории для геймеров" : "Geymerlar uchun toifalar"}</h2>
                              </Col>


                              <Row>
                                    <Slider {...settings}>
                                          {gamingCategory.map(({ id, name_ru, name_uz, image }) => {
                                                return <Col key={id} xl={2} lg={2} md={4} xs={6}>
                                                      <div className="game">
                                                            <img src={image} alt="" />
                                                            <p>{language === "uz" ? name_uz : name_ru}</p>
                                                      </div>
                                                </Col>
                                          })}
                                    </Slider>
                              </Row>
                        </Row>
                  </Container>
            </div>
      )
}
