import { useNavigate } from 'react-router-dom';
import './ProductItem.scss'
import { FaBalanceScale, FaHeart, FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useContext } from 'react';
import { Context } from '../../Hooks/Context';

export default function ProductItem({ product }) {
      const navigate = useNavigate()
      const { setAddedCart, setFavoriteProducts, favoriteProducts, language } = useContext(Context)

      // function product add to cart >=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->

      const handleAddtoCart = (id) => {
            setAddedCart(prev => {
                  const find = prev.find(item => item.id === id)
                  if (find) {
                        return prev.map(item => item.id === id ? { ...item, count: item.count + 1 } : item)
                  }
                  else {
                        return [...prev, { ...product.find(item => item.id === id), count: 1 }]
                  }
            })
      }

      return (
            product.map(({ id, isNew, image, stars, name, comment, price }) => (
                  <div className='product' key={id} >
                        <div className="productTop">
                              <div className="left">
                                    {isNew && <p className='isNew'>{language === 'ru' ? 'Новинка' : "Yangi qo'shilgan"}</p>}
                              </div>
                              <div className="right">
                                    <button><FaBalanceScale /></button>
                                    <button onClick={() =>
                                          setFavoriteProducts(prev =>
                                                prev.includes(id)
                                                      ? prev.filter(item => item !== id)
                                                      : [...prev, id]
                                          )
                                    }>{favoriteProducts.includes(id) ? <FaHeart className='liked' /> : <FaRegHeart />}</button>
                              </div>
                        </div>

                        <div className="productInfo" onClick={() => navigate(`/ProductDetails/${id}`)}>
                              <img src={image[0]} alt={name} />
                              <p className='name'>{name}</p>
                              {stars && (
                                    <div className="stars">
                                          {Array(stars).fill(null).map((_, index) => (
                                                <FaStar key={index} className='yellow' />
                                          ))}

                                          {Array(5 - stars).fill(null).map((_, index) => (
                                                <FaStar key={index} />
                                          ))}

                                          <p>{language === "uz" ? "Sharhlar" : "Отзывов"}: {comment}</p>
                                    </div>
                              )}
                        </div>

                        <div className="productBottom">
                              <div className="price" >
                                    <p className='old-price'>{price.new && price.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (language === "uz" ? "so'm" : "сум")}</p>
                                    {!price.new
                                          ? <p className='price'>{price.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}<span>{language === "uz" ? "so'm" : "сум"}</span></p>
                                          : <p className='price priceNew'>{price.new.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}<span>{language === "uz" ? "so'm" : "сум"}</span></p>}
                              </div>

                              <button className='buy' onClick={() => handleAddtoCart(id)}>
                                    <span className='icon'><FaShoppingCart /></span>
                                    <span className='text'>{(language === "uz" ? "Sotib olish" : "КУПИТЬ")}</span>
                              </button>
                        </div>
                  </div>
            ))
      );
}
