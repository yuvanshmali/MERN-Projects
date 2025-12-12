import React from 'react';

const Footer = () => {
    return (
        <div className='p-5'>
            <div className='flex justify-center items-center gap-4 mb-3'>
                <a href="#about" >
                    <img
                        src="/my-profile.jpg"
                        alt="Profile"
                        className="w-9 h-9 rounded-full border-none cursor-pointer object-cover border border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_18px_rgba(255,255,255,0.5)]"
                    />
                </a>
                <a
                    href="#about"
                    className="font-bold text-lg text-white"
                >
                    Yuvansh Mali
                </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-8 ">
                <a
                    href="https://github.com/yuvanshmali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black text-2xl"
                >
                    <img className='w-5' src="/github.png" alt="github-icon" />
                </a>
                <a
                    href="https://linkedin.com/in/yuvansh-mali-70b1b933a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-2xl"
                >
                    <img className='w-5' src="/linkedin.png" alt="linkedin-icon" />
                </a>
                <a
                    href="https://instagram.com/yuvanshmali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-700 text-2xl"
                >
                    <img className='w-5' src="/instagram.png" alt="instagram-icon" />
                </a>
            </div>
        </div>
    )
}

export default Footer
