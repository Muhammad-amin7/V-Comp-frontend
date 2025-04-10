import './LoginModal.scss'
// import PropTypes from 'prop-types';
import Login from './Login/Login';
import SignUp from './Sign Up/SignUp';


export default function LoginModal({ login, setLogin }) {
      return (
            <div className='login_modal' style={{ display: login ? "flex" : 'none' }}>
                  <Login login={login} setLogin={setLogin} />
                  <SignUp login={login} setLogin={setLogin} />
            </div>
      )
}


