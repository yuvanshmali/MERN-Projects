import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div id='footer' className='bg-[#323232] text-white'>
            <div className="footer-content flex flex-col md:grid grid-cols-[2fr_1fr_1fr]  gap-10 md:gap-20 px-10 md:px-25 py-10">
                <div className="footer-left flex flex-col  gap-2.5 ">
                    <img src={assets.logo} alt="" className='w-35'/>
                    <p>Freshly prepared with quality ingredients — delivered hot to your door. Enjoy food the way it should be.</p>
                    <div className="social-media-icons flex gap-2">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-center">
                    <h2 className='font-bold text-xl' >COMPANY</h2>
                    <ul className='mt-3'>
                        <li className='cursor-pointer mb-1.5'>Home</li>
                        <li className='cursor-pointer mb-1.5'>About Us</li>
                        <li className='cursor-pointer mb-1.5'>Delivery</li>
                        <li className='cursor-pointer mb-1.5'>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h2 className='font-bold text-xl' >GET IN TOUCH</h2>
                    <ul className='mt-3'>
                        <li className='cursor-pointer mb-1.5'>+91- 9988771122</li>
                        <li className='cursor-pointer mb-1.5'>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom flex flex-col justify-center items-center ">
                <hr className='w-[80%] h-px border-0 rounded-full bg-[#e2e2e2]' />
                <p className='py-5 px-5 text-center' >Copyright 2026 ©️ Tomato.com - All Rigth Reserved.</p>
            </div>
        </div>
    )
}

export default Footer 
