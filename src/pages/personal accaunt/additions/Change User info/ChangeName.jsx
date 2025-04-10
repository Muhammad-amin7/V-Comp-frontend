import { useContext, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { Context } from '../../../../Hooks/Context'
import PropTypes from 'prop-types'
import "./ChangeUserInfo.scss"


export default function ChangeName({ active, setActive }) {
      const { userInfo, setUserInfo } = useContext(Context)
      const [inputValue, setInputValue] = useState(userInfo.name)

      const handleChangeInfo = (e) => {
            e.preventDefault()
            fetch("https://v-comp-backend.onrender.com/users/update", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                  },
                  body: JSON.stringify({ name: inputValue })
            }).then(res => res.json())
                  .then(res => {
                        if (res.data && res.succes) {
                              setUserInfo(res.data)
                              setActive(false)
                        }
                  })
      }

      return (
            <div className='change_user_info' style={{ display: active.active ? "flex" : "none" }}>
                  <div className="content">
                        <div className="modal_head">
                              <h3>{active.type == "change" ? "Изменение ФИО" : "Добавление ФИО"}</h3>
                              <FaXmark onClick={() => setActive(false)} />
                        </div>

                        <form action="">
                              <input
                                    type="text"
                                    placeholder={"Введите ФИО"}
                                    value={inputValue}
                                    onChange={e => setInputValue(e.target.value)} />
                              <button type="submit" onClick={(e) => handleChangeInfo(e)}>СОХРАНИТЬ</button>
                        </form>
                  </div>
            </div>
      )
}


ChangeName.propTypes = {
      active: PropTypes.bool.isRequired,
      setActive: PropTypes.func.isRequired,
      type: PropTypes.func.isRequired
}