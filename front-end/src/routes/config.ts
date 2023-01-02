import ClientsCRUDPage from '../pages/ClientsCRUD'
import HomePage from '../pages/Home'
import ImageByStatusCodePage from '../pages/ImageByStatusCode'
import LoginPage from '../pages/Login'
import RandomDogPage from '../pages/RandomDog'

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
  },
  {
    path: '/random-dog',
    element: RandomDogPage,
    protected: true,
  },
  {
    path: '/clients',
    element: ClientsCRUDPage,
    protected: true,
  }
]

export default list