import { useContext } from "react"
import { Context } from "../../../../Hooks/Context"
import PropTypes from "prop-types"

export default function ProductPrice({ item }) {
      // Context
      const { setAddedCart, } = useContext(Context)

      const handleAddtoCart = (id) => {
            setAddedCart(prev => {
                  const find = prev.find(element => element.id === id)
                  if (find) {
                        return prev.map(element => element.id == id ? { ...element, count: element.count + 1 } : element)
                  }
                  else {
                        return [...prev, { ...item, count: 1 }]
                  }
            })
      }
      return (
            <section className="productPrice">
                  <div className="price" >
                        <p className='old-price'>{item.price.new && item.price.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "сум"}</p>
                        {!item.price.new
                              ? <p className='price'>{item.price.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}<span>сум</span></p>
                              : <p className='price priceNew'>{item.price.new.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}<span>сум</span></p>}
                  </div>

                  <button className='buy' onClick={() => handleAddtoCart(item.id)}>КУПИТЬ</button>
                  <button className='credit'>КУПИТЬ В КРЕДИТ</button>
            </section>
      )
}

ProductPrice.propTypes = {
      item: PropTypes.object.isRequired
}