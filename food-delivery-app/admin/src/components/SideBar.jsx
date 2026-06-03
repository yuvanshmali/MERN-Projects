import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='sidebar w-[18%] min-h-screen border-[1.5px] border-[#a9a9a9] border-t-0 rounded-l-[3px] rounded-r-none text-[max(1vw,10px)]'>
            <div className="sidebar-options pt-12 pl-[20%] flex flex-col gap-5">
                <NavLink to="/add" className={({ isActive }) => isActive ? "flex items-center gap-3 border border-[tomato] bg-[#fff0ed] border-r-0 rounded-l-[3px] rounded-r-none py-2 pl-2.5 cursor-pointer" : "flex items-center gap-3 border border-[#a9a9a9] border-r-0 rounded-l-[3px] rounded-r-none py-2 pl-2.5 cursor-pointer"}>
                    <img src={assets.add_icon} alt="" />
                    <p className='hidden md:block'>Add Items</p>
                </NavLink>
                <NavLink to="/list" className={({ isActive }) => isActive ? "flex items-center gap-3 border border-[tomato] bg-[#fff0ed] border-r-0 rounded-l-[3px] rounded-r-none py-2 pl-2.5 cursor-pointer" : "flex items-center gap-3 border border-[#a9a9a9] border-r-0 rounded-l-[3px] rounded-r-none py-2 pl-2.5 cursor-pointer"}>
                    <img src={assets.order_icon} alt="" />
                    <p className='hidden md:block'>List Items</p>
                </NavLink>
                <NavLink to="/order" className={({ isActive }) => isActive ? "flex items-center gap-3 border border-[tomato] bg-[#fff0ed] border-r-0 rounded-l-[3px] rounded-r-none py-2 pl-2.5 cursor-pointer" : "flex items-center gap-3 border border-[#a9a9a9] border-r-0 rounded-l-[3px] rounded-r-none py-2 pl-2.5 cursor-pointer"}>
                    <img src={assets.order_icon} alt="" />
                    <p className='hidden md:block'>Orders</p>
                </NavLink>
            </div>

        </div>
    )
}

export default SideBar
