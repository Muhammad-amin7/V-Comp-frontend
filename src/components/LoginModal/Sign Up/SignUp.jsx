import { useState, useRef, useContext } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle, FaXmark } from 'react-icons/fa6';
import Errors from '../Errors/Errors';
import PropTypes from 'prop-types';
import { Context } from '../../../Hooks/Context';

export default function SignUp({ login, setLogin }) {
      const form = useRef(null);
      const [showPassword, setShowPassword] = useState(false);
      const [errors, setErrors] = useState({ password: false, phone: false });
      const [errorModal, setErrorModal] = useState(false)
      const { setUserInfo, setPassRegister } = useContext(Context)

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
                  fetch("https://v-comp-backend.onrender.com/users", {
                        method: "POST",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify(values)
                  })
                        .then(res => res.json())
                        .then(res => {
                              if (res.error) {
                                    setErrorModal(res.error)
                              }
                              else {
                                    setLogin(false)
                                    localStorage.setItem("token", res.token)
                                    setPassRegister(true)
                                    setUserInfo(prev => ({ ...prev, ...res.info }))
                              }
                        })
            }
      }



      return (
            <div className='loginModal' style={{ display: login === 'sign' ? "block" : "none" }}>
                  <div className="modal_header">
                        <h1>Регистрация</h1>
                        <FaXmark onClick={() => setLogin(false)} />
                  </div>
                  <div className="modal_body">
                        <form ref={form}>
                              <input name='name' type="name" placeholder='Имя' />
                              <input id='phone' name='phone' type="text" placeholder='Ваш номер телефона' />
                              <label htmlFor="phone" className={errors.phone ? "active" : ""}>Некорректный номер</label>

                              <div className='loginPassword'>
                                    <input
                                          id='password'
                                          name='password'
                                          placeholder='Пароль'
                                          type={showPassword ? 'text' : 'password'}
                                    />
                                    <label htmlFor="password" className={errors.password ? "active" : ""}>
                                          Пароль должен содержать не менее 8 символов
                                    </label>
                                    <button onClick={(e) => { e.preventDefault(); setShowPassword(prev => !prev); }}>
                                          {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                              </div>

                              <button onClick={handleCheckValue}>Регистрация</button>
                        </form>

                        <p className='or'>или войти с помощью</p>
                        <div className="loginBy">
                              <button><FaGoogle /> Google</button>
                              <button><FaFacebookF /> Facebook</button>
                        </div>

                        <p className="register">
                              Уже зарегистрированы? <span onClick={() => setLogin("login")}>Войти</span>
                        </p>
                  </div>
                  <Errors active={errorModal} setActive={setErrorModal} />
            </div>
      );
}

SignUp.propTypes = {
      login: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
      ]),
      setLogin: PropTypes.func.isRequired
}