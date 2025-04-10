import './require.scss'
import xmark from "../../../../assets/img/xmark_error.svg"
import PropTypes from 'prop-types'

export default function ErrorRequire({ name, active }) {
      return (
            active && <div className='error_require requires'>
                  <img src={xmark} alt="error icon" />
                  <h1>Что-то пошло не так</h1>
                  <p>Произошла ошибка. Ваш {name} не был изменен. Попробуйте позже.</p>
            </div>
      )
}


ErrorRequire.propTypes = {
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
}