import React from 'react'
import '../index.css'

const Header = () => {
    return (
        <div className="header bg-[url('header_img.png')] bg-cover bg-center bg-no-repeat mt-8 md:mt-13 h-[25vh] md:h-[60vh] rounded-lg relative">
            <div className="header-contents flex flex-col gap-2 md:gap-5 absolute left-3 bottom-3 md:left-2.5 md:bottom-10 items-start pl-2 md:pl-10 max-w-[80%] fade-in">
                <h2 className='text-2xl md:text-5xl font-bold text-white'>Order your favourtie food here.</h2>
                <p className='text-white hidden md:block'>Freshly prepared with quality ingredients — delivered hot to your door. Enjoy food the way it should be</p>
                <button className='bg-white text-[#686767] text-sm md:text-[16px] rounded-full px-4 py-2 cursor-pointer hover:opacity-80 duration-300'>View Menu</button>
            </div>
        </div>
    )
}

export default Header
