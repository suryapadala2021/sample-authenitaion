// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button onClick={logout} type="button">
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
