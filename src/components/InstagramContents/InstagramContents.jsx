import "./InstagramContents.scss"
import img1 from "../../assets/img/InstagramContents (1).png"
import img2 from "../../assets/img/InstagramContents (2).png"
import { Row } from "react-bootstrap"
import Marquee from "react-fast-marquee";

export default function InstagramContents() {
      const instagramContent = [
            { id: 0, image: img1 },
            { id: 1, image: img2 },
      ]

      return (
            <div className="instagramContents">
                  <h1 className="title">Инстаграм</h1>
                  <div className="content">
                        <Row className=" flex-nowrap overflow-auto">
                              <Marquee {...{ speed: 30, autoFill: true }}>
                                    {Array(3).fill().map(() => {
                                          return instagramContent.map(({ id, image }) => {
                                                return <img src={image} alt="" key={id} />
                                          })
                                    })}
                              </Marquee>
                        </Row>
                  </div>
            </div>
      )
}
