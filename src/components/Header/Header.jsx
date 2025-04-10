import { Col, Container, Row } from 'react-bootstrap'
import './Header.scss'
import { CatalogName, headerIcons, headerSlider } from '../../Constants/Data'
import { FaChevronRight } from "react-icons/fa6";
import Slider from 'react-slick';
import { useContext } from 'react';
import { Context } from '../../Hooks/Context';

export default function Header() {
      const { language } = useContext(Context)
      var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear"
      };
      return (
            <header>
                  <Container>
                        <Row>
                              <Col lg={4} className='d-none d-lg-block'>
                                    <ul className='catalogs'>
                                          {CatalogName.map(({ id, name_uz, name_ru, icon }) => (
                                                <li key={id}>
                                                      <img src={icon} alt="" />
                                                      <span>{language === 'uz' ? name_uz : name_ru}</span>
                                                      <FaChevronRight />
                                                </li>
                                          ))}
                                    </ul>
                              </Col>

                              <Col lg={8}>
                                    <Slider {...settings}>
                                          {headerSlider.map(({ id, image }) => (
                                                <div className='slider' key={id}>
                                                      <img src={image} alt="" />
                                                </div>
                                          ))}
                                    </Slider>

                                    <div className="smallIcons">
                                          {headerIcons.map(({ id, image, text_ru, text_uz }) => (
                                                <div key={id}>
                                                      <img src={image} alt="" />
                                                      <span>{language === "uz" ? text_uz : text_ru}</span>
                                                </div>
                                          ))}
                                    </div>
                              </Col>
                        </Row>
                  </Container>
            </header>
      )
}
