import './index.css'
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

const Login = props => {
  const token = Cookies.get('jwt_token')
  const login = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = props
      history.replace('/')
    }
  }

  if (token !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login">
      <h1 className="login-heading">Please Login</h1>
      <button onClick={login} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}
export default withRouter(Login)
