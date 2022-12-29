import HomePage from '../pages/Home'
import ImageByStatusCodePage from '../pages/ImageByStatusCode'
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
  },
  {
    path: '/status-code',
    element: ImageByStatusCodePage,
    protected: true,
  }
]

export default list