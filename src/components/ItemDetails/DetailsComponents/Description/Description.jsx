import PropTypes from "prop-types"
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

export default function Description({ item }) {
      // read more description
      const [readMore, setReadMore] = useState(300)
      return (
            item.description && <section className="description">
                  <h3 className='subTitle'>Описание товара</h3>
                  <p>{item.description.slice(0, readMore) + (readMore === 300 ? "..." : " ")}</p>
                  <button onClick={() => setReadMore((prev) => prev === 300 ? 10000 : 300)}>{readMore === 300 ? "Смотреть еще" : "Скрыть"}{readMore === 300 ? <FaChevronDown /> : <FaChevronUp />} </button>
            </section>

      )
}

Description.propTypes = {
      item: PropTypes.object.isRequired
}