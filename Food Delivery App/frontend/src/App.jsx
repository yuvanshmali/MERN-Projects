import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
import Home from './pages/Home'
import Cart from './pages/Cart'
import MyOrders from './pages/MyOrders'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'


const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  // Remove URL hash on refresh without redirecting.
  // useNavigate("/") is avoided because it forces navigation and breaks SPA(signle page application) behavior.
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname
      );
    }
  }, []);

  return (
    <>
      {/* Shows login popup while sign in or log in */}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className=" app w-[90%] md:w-[80%] mx-auto">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App
