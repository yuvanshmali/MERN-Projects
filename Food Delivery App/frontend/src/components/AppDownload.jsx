import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
    return (
        <div id='mobile-app' className='flex flex-col items-center m-7 md:m-10 gap-10'>
            <p className='text-center text-xl md:text-3xl'>For Better Experience Download <br /><b>Tomato App</b></p>
            <div className='flex justify-center gap-x-5 md:gap-x-10 scale-85 md:scale-100' >
                <img className='w-50 h-16.25 hover:scale-110 duration-200' src={assets.play_store} alt="" />
                <img className='w-50 h-16.25 hover:scale-110 duration-200' src={assets.app_store} alt="" />
            </div>

        </div>
    )
}

export default AppDownload
