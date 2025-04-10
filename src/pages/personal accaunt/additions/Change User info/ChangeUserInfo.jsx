import { FaXmark } from 'react-icons/fa6'
import './ChangeUserInfo.scss'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../../Hooks/Context'
import PropTypes from 'prop-types'
import SuccessRequire from '../requires/SuccessRequire'
import ErrorRequire from '../requires/ErrorRequire'

export default function ChangeUserInfo({ id, active, setActive }) {
      const { userInfo, setUserInfo } = useContext(Context)
      const findId = userInfo.find(item => item.id === id)
      const [newValue, setNewValue] = useState(findId?.value)
      const [succes, setSuccces] = useState(false)
      const [error, setError] = useState(false)
      const handleChangeValue = (e) => {
            e.preventDefault()
            setUserInfo(prev => prev.map(item => item.id === id ? { ...item, value: newValue } : item))
            setActive(false)
            setNewValue("")
            setSuccces(true)
      }


      useEffect(() => {
            if (error || succes) {
                  setTimeout(() => {
                        setError(false)
                        setSuccces(false)
                  }, 3000)
            }
      }, [succes, error])

      return (
            <>
                  <div className='change_user_info' style={{ display: active ? "flex" : "none" }}>
                        <div className="content">
                              <div className="modal_head">
                                    <h3>{findId?.name}</h3>
                                    <FaXmark onClick={() => { setActive(false); setNewValue(""); setError(true) }} />
                              </div>

                              <form action="">
                                    <input type="text" placeholder={"Введите" + " " + findId?.name} onChange={(e) => setNewValue(e.target.value)} value={newValue} />
                                    <button type="submit" onClick={(e) => handleChangeValue(e)}>СОХРАНИТЬ</button>
                              </form>
                        </div>
                  </div>
                  <SuccessRequire active={succes} name={findId?.name} />
                  <ErrorRequire active={error} name={findId?.name} />
            </>
      )
}


ChangeUserInfo.propTypes = {
      id: PropTypes.number.isRequired,
      active: PropTypes.bool.isRequired,
      setActive: PropTypes.func.isRequired
}