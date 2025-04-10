import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Imgs({ item }) {
      // active img
      const [activeImg, setActiveImg] = useState(0)
      return (
            <section className='images'>
                  <div className="addition ">
                        {item.image.map((item, index) => {
                              return <img className={index === activeImg ? "active" : null} src={item} key={index} alt='' onClick={() => setActiveImg(index)} />
                        })}
                  </div>
                  <div className="main">
                        <img src={item.image[activeImg]} alt="" />
                  </div>
            </section>
      )
}

Imgs.propTypes = {
      item: PropTypes.object.isRequired
}