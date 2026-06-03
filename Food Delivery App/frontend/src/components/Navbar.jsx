import React, { useContext, useState, } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../contexts/StoreContext';

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  // This is only for bottom line while that particular page is active, nothing else

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)

  const navigate = useNavigate();
  const location = useLocation();

  // BY the help of this we can go to menu, app-download components from diff. pages (like cart, placeholder also)
  const handleNavClick = (section) => {
    setMenu(section)

    if (location.pathname !== "/") {
      navigate("/")
    }
  }

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }



  return (
    <div className='navbar relative z-50 flex justify-between items-center mt-5 md:mt-8'>
      {/* navbar-left */}
      <div className="narbar-left">
        <Link to="/" ><img src={assets.logo} alt="logo" className='w-32 md:w-full' /></Link>
      </div>

      {/* navbar-middle */}
      <div className="navbar-middle">
        <ul className='md:flex gap-5 hidden '>
          <Link to='/' onClick={() => handleNavClick("home")} className={`${menu === "home" ? "active" : ""} cursor-pointer`}>home</Link>
          <a href='#menu' onClick={() => handleNavClick("home")} className={`${menu === "menu" ? "active" : ""} cursor-pointer`}>menu</a>
          <a href='#mobile-app' onClick={() => handleNavClick("home")} className={`${menu === "mobile-app" ? "active" : ""} cursor-pointer`}>mobile-app</a>
          <a href='#footer' onClick={() => handleNavClick("home")} className={`${menu === "contact-us" ? "active" : ""} cursor-pointer`}>contact-us</a>
        </ul>
      </div>

      {/* navbar-right */}
      <div className="navbar-rigt flex gap-5 scale-90 md:scale-100">
        <img src={assets.search_icon} alt="search-icon" className='cursor-pointer h-7' />
        <div className="relative">
          <Link to="/cart" ><img src={assets.basket_icon} alt="basket-icon" className='cursor-pointer' /></Link>
          <div className={getTotalCartAmount() === 0 ? "hidden" : "dot absolute border-5 border-[#FF6347] rounded-full -top-1.5 -right-0.5"}></div>
        </div>

        {/* for hidden the button of sign -in when we logged in */}
        {!token
          ? <button onClick={() => setShowLogin(true)} className='border border-[#ff6347] px-4 py-1 rounded-3xl cursor-pointer hover:bg-[#fff4f2] transition duration-300' >sign-in</button>
          : <div className='navbar-profile group'>
            <img src={assets.profile_icon} alt="" />

            <ul className='absolute right-0 z-10 hidden group-hover:flex flex-col gap-2.5 bg-[#fff2ef] py-2 px-5 rounded-sm border border-[tomato] outline outline-white text-sm'>
              <li onClick={()=>{navigate('/myorders')}} className="flex gap-2.5 items-center cursor-pointer">
                <img className='w-5' src={assets.bag_icon} alt="" /><p className='hover:text-[tomato]'>Orders</p>
              </li>
              <hr />
              <li onClick={logOut} className="flex gap-2.5 items-center cursor-pointer">
                <img className='w-5' src={assets.logout_icon} alt="" /><p className='hover:text-[tomato]'>Logout</p>
              </li>
            </ul>
          </div>
        }

      </div>


    </div>
  )
}

export default Navbar
