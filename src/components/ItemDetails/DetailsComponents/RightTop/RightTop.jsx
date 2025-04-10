import { useContext } from "react";
import { FaBalanceScale, FaHeart, FaRegHeart } from "react-icons/fa";
import { Context } from "../../../../Hooks/Context";
import PropTypes from "prop-types";

export default function RightTop({ item }) {
      const { setFavoriteProducts, favoriteProducts } = useContext(Context)
      return (
            <section className="rightTop">
                  <div className="new">
                        {item.isNew ? <p>Новинка</p> : null}
                        {item.isTop ? <p>Топ продаж</p> : null}
                  </div>
                  <div className="icons">
                        <button><FaBalanceScale /></button>
                        <button onClick={() =>
                              setFavoriteProducts(prev =>
                                    prev.includes(item.id)
                                          ? prev.filter(element => element !== item.id)
                                          : [...prev, item.id]
                              )
                        }>{favoriteProducts.includes(item.id) ? <FaHeart className='liked' /> : <FaRegHeart />}</button>
                  </div>
            </section>
      )
}

RightTop.propTypes = {
      item: PropTypes.object.isRequired
}