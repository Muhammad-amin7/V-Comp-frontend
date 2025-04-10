import './LoginModal.scss'
// import PropTypes from 'prop-types';
import Login from './Login/Login';
import SignUp from './Sign Up/SignUp';
import PropTypes from 'prop-types';


export default function LoginModal({ login, setLogin }) {
      return (
            <div className='login_modal' style={{ display: login ? "flex" : 'none' }}>
                  <Login login={login} setLogin={setLogin} />
                  <SignUp login={login} setLogin={setLogin} />
            </div>
      )
}


LoginModal.propTypes = {
      login: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.bool.isRequired
      ]),
      setLogin: PropTypes.func.isRequired
}