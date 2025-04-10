import { Col, Container, Row } from 'react-bootstrap'
import './Partners.scss'
import Marquee from "react-fast-marquee";
import partner1 from "../../assets/img/Partners (1).svg"
import partner2 from "../../assets/img/Partners (2).svg"
import partner3 from "../../assets/img/Partners (3).svg"
import partner4 from "../../assets/img/Partners (4).svg"
import partner5 from "../../assets/img/Partners (5).svg"


export default function Partners() {
      const partnersData = [
            { id: 0, image: partner1 },
            { id: 1, image: partner2 },
            { id: 2, image: partner3 },
            { id: 3, image: partner4 },
            { id: 4, image: partner5 },
      ]
      return (
            <div className='partners'>

                  <Container >
                        <Row>
                              <Col lg={12}>
                                    <h1 className='title'>Партнеры</h1>
                              </Col>
                              <Col lg={12}>
                                    <Marquee {...{ autoFill: true, speed: 40, direction: "right", gradient: false }}>
                                          {partnersData.map(({ id, image }) => {
                                                return <img src={image} key={id} alt="" />
                                          })}
                                    </Marquee>
                              </Col>
                        </Row>
                  </Container >
            </div >
      )
}
