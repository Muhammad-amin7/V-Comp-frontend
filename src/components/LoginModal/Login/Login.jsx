import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react'
import { useRef } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaXmark } from 'react-icons/fa6';
import Errors from '../Errors/Errors';
import { Context } from '../../../Hooks/Context';

export default function Login({ login, setLogin }) {
      const form = useRef(null)
      const [showPassword, setShowPassword] = useState(false)
      const [errors, setErrors] = useState({ password: false, number: false });
      const [errorModal, setErrorModal] = useState(false)
      const { setPassRegister, setUserInfo, userInfo } = useContext(Context)


      const checkError = (values) => {
            const newErrors = {
                  password: values.password.length < 8,
                  phone: isNaN(values.phone) || values.phone.trim() === ''
            };
            setErrors(newErrors);
            return newErrors;
      };

      const handleCheckValue = (e) => {
            e.preventDefault();
            let values = {};
            new FormData(form.current).forEach((value, key) => {
                  values[key] = value;
            });

            const validationErrors = checkError(values);
            if (!validationErrors.phone && !validationErrors.password) {
                  fetch("https://v-comp-backend.onrender.com/login", {
                        method: "POST",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify(values)
                  })
                        .then(res => res.json())
                        .then(res => {
                              if (res.info) {
                                    setLogin(false)
                                    setPassRegister(true)
                                    localStorage.setItem("token", res.token)
                                    setUserInfo(prev => ({ ...prev, ...res.info }))

                              }
                              else {
                                    setErrorModal(res.message)
                              }
                        })
            }
      };

      useEffect(() => {
            console.log(userInfo)
      }, [userInfo])
      return (
            <div className='loginModal' style={{ display: login === "login" ? "block" : "none" }}>
                  <div className="modal_header">
                        <h1>Вход</h1>
                        <FaXmark onClick={() => setLogin(false)} />
                  </div>
                  <div className="modal_body">
                        <form action="" ref={form}>
                              <input id='phone' name='phone' type="text" placeholder='Ваш номер телефона' />
                              <label htmlFor="phone" className={errors.phone ? "active" : null}>Error</label>
                              <div className='loginPassword'>
                                    <input className='inp' id='password' name='password' placeholder='Пароль' type={showPassword ? 'text' : 'password'} />
                                    <label htmlFor="password" className={errors.password ? "active" : null}>Error</label>
                                    <button onClick={(e) => { e.preventDefault(); setShowPassword(prev => !prev) }}>{showPassword ? <FaEye /> : <FaEyeSlash />}</button>
                              </div>

                              <p>Забыли пароль?</p>
                              <button onClick={(e) => handleCheckValue(e)}>ВОЙТИ</button>
                        </form>


                        <p className='or'>или войти с помощью</p>
                        <div className="loginBy">
                              <button><FaGoogle />Google</button>
                              <button><FaFacebookF />Faceobok</button>
                        </div>

                        <p className="register">Нет аккаунта? <span onClick={() => { setLogin("sign") }}>Зарегистрироваться</span></p>
                  </div>
                  <Errors active={errorModal} setActive={setErrorModal} />
            </div>
      )
}

Login.propTypes = {
      login: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
      ]),
      setLogin: PropTypes.func.isRequired
}