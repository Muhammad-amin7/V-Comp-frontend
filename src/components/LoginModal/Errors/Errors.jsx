import { useEffect } from 'react'
import exclamation from '../../../assets/img/exclamation.png'
import "./Errors.scss"
import PropTypes from 'prop-types'
export default function Errors({ active, setActive }) {
      useEffect(() => {
            if (active) {
                  setTimeout(() => { setActive(false) }, 5000)
            }
      }, [active])
      return (
            <div className='loginError' style={{ display: active ? "flex" : 'none' }}>
                  <img src={exclamation} alt="" />
                  <h1>{active} , iltimos tekshirib qaytadan urinib koring</h1>
            </div >
      )
}

Errors.propTypes = {
      active: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
      ]),
      setActive: PropTypes.func.isRequired
}