import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (

        // In ExploreMenu.jsx we write toggle behaviour using onClick.

        <div id="menu">
            <div className='explore-menu mt-13 flex flex-col gap-2'>
                <h1 className='font-bold text-3xl'>Explore our menu</h1>
                <p className='font-medium md:font-normal md:max-w-[70%] text-[#747474]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisty your craving and elevate your Dining experience, one delicious meal at a time.</p>
                <div className="menu-list flex gap-8 md:gap-10 mt-5 max-w-[95%] mx-auto overflow-auto ">
                    {menu_list.map((item, index) => {
                        return (
                            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                                key={index} className='flex flex-col items-center gap-1.5 cursor-pointer min-w-20 md:max-w-[7vw]'>
                                <img className={category === item.menu_name ? "categoryBorder" : ""} src={item.menu_image} alt="" />
                                <p className='text-[#747474] mt-1.5'>{item.menu_name}</p>
                            </div>
                        )
                        // Why is the onClick() logic needed? Without this logic, the user wouldn't be able to unselect the same category, the UX would be boring, and the filter would get stuck.
                        // With this logic: Categories can be selected and unselected, providing a proper toggle UX.
                    })}
                </div>
            </div>
            <hr className='w-[80%] mx-auto h-1 bg-[#e2e2e2] border-none mt-10 rounded-md ' />
        </div>
    )
}

export default ExploreMenu

// We create toggle behavior for menu selection using useState's functional updater.
// `prev` is a variable name that represents the previous state value (name can be anything).
// We use `prev` because the new state depends on the previous state, and React updates state asynchronously.
// If the previously selected category is clicked again, we reset it to "All";
// otherwise, we set the category to the clicked item.
