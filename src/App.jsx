import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './pages/Cart'
import Checkout from './components/Checkout'
import Success from './pages/Success'
import FilterData from './pages/FilterData'
import About from './components/About'
import Contact from './components/Contact'



function App() {

  return (
   <BrowserRouter>
    <Navbar/> 
      <Routes>
       <Route path='/' element={<Home/>}> </Route>
       <Route path='/shop' element={<Shop/>}> </Route>
       <Route path='/contact' element={<Contact/>}> </Route>
       <Route path='/About' element={<About/>}> </Route>
       <Route path='/cart' element={<Cart/>}> </Route>
       <Route path='/checkout' element={<Checkout/>}> </Route>
       <Route path='/order-confimation' element={<Success/>}> </Route>
       <Route path='/filter-Data' element={<FilterData/>}> </Route>
       
      </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
