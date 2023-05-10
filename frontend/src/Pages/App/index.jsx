import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOroders from '../MyOrders'
import NotFound from '../Notfound'
import SignIn from '../SignIn'
import Navbar from '../../components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', Element: <Home /> },
    { path: '/my-account', Element: <MyAccount />},
    { path: '/my-order', Element: <MyOrder />},
    { path: '/my-orders', Element: <MyOroders />},
    { path: '/*', Element: <NotFound />},
    { path: '/sign-in', Element: <SignIn />},
  ])

  return routes
}

const App = () => {
  return (
   <BrowserRouter>
      <AppRoutes />
      <Navbar />
   </BrowserRouter>
  )
}

export default App