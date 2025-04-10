import { useContext, useEffect, useState } from 'react';
import { productData } from '../../Constants/ProductData';
import ProductItem from '../ProductItem/ProductItem';
import './Basket.scss';
import { FaXmark } from 'react-icons/fa6';
import { Context } from '../../Hooks/Context';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

export default function Basket({ active, setActive }) {
      // Context
      const { addedCart, setAddedCart } = useContext(Context)
      // All price state
      const [allPrice, setAllPrice] = useState(0)

      // if modal active , body overflow hidden
      document.querySelector('body').style.overflow = active ? 'hidden' : 'auto'

      // calculate all price
      useEffect(() => {
            setAllPrice(addedCart.reduce(
                  (acc, item) => acc + ((item.price.new ? item.price.new : item.price.price) * item.count), 0
            ))
      }, [addedCart])


      return (
            <div className='basket' style={{ display: active ? "flex" : "none" }}>
                  <div className="content">
                        <div className="head">
                              <h1>Корзина</h1>
                              <FaXmark onClick={() => setActive(false)} />
                        </div>

                        <div className="products">
                              {addedCart.length <= 0 ?
                                    <p className='noProduct'>Корзина пустая</p> :
                                    addedCart.map(({ id, name, image, price, count }) => {
                                          return <div className='product' key={id}>
                                                <img src={image[0]} alt="" />
                                                <p className="name">{name}</p>

                                                <div className="count">
                                                      <button onClick={() => setAddedCart(prev => {
                                                            const updatedCart = prev.map(item =>
                                                                  item.id === id ? { ...item, count: item.count - 1 } : item
                                                            );
                                                            return updatedCart.filter(item => item.count > 0);
                                                      })}><FaMinus /></button>
                                                      <span>{count}</span>
                                                      <button onClick={() => setAddedCart(prev =>
                                                            prev.map(item =>
                                                                  item.id === id ? { ...item, count: item.count + 1 } : item
                                                            )
                                                      )}><FaPlus /></button>
                                                </div>

                                                <p className="itemPrice">{((price?.new * count) || (price?.price * count)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "сум"}</p>

                                                <FaTrash onClick={() => setAddedCart(prev => prev.filter(item => item.id !== id))} />
                                          </div>
                                    })

                              }
                        </div>

                        <div className="allPrice">
                              <button onClick={() => setActive(false)}>Продолжить покупки</button>
                              <div className="right">
                                    <p>{allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}сум</p>
                                    <button className={addedCart.length === 0 ? "disabled" : null}>ОФОРМИТЬ ЗАКАЗ</button>
                              </div>
                        </div>

                        <h2>Новинка</h2>

                        <div className="topProducts">
                              <Row>
                                    {productData.map((item, index) => {
                                          return item.isNew ? <Col md={3} xs={6} key={index}><ProductItem product={[item]} onClick={() => setActive(false)} /></Col> : null
                                    })}
                              </Row>
                        </div>



                  </div>
            </div >
      )
}

Basket.propTypes = {
      active: PropTypes.bool,
      setActive: PropTypes.func
}
