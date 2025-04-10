import "./require.scss"
import check from "../../../../assets/img/check_succes.svg"
import PropTypes from "prop-types"

export default function SuccessRequire({ name, active }) {
      return (
            <div className='suuces_require requires' style={{ display: active ? "block" : "none" }}>
                  <img src={check} alt="img success" />
                  <h1>{name} была успешно изменена</h1>
                  <p>Ваш {name} почты был успешно изменен.</p>
                  <h3>Перейти в личный кабинет</h3>
            </div>
      )
}
SuccessRequire.propTypes = {
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
}