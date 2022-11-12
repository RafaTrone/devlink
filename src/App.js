import { createBrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Error from './pages/Error'

import Private from './routes/private'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path: '/Admin',
    element: <Private> <Admin/></Private>
  },
  {
    path: '*',
    element: <Error/>
  }  
])

export { router };