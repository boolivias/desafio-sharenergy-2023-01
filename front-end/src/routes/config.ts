import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'

const list = [
  {
    path: '/',
    element: LoginPage,
    protected: false,
  },
  {
    path: '/inicio',
    element: HomePage,
    protected: true,
  }
]

export default list