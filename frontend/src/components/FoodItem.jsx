import React, { useContext } from 'react'
import '../index.css'
import { assets } from '../assets/assets'
import { StoreContext } from '../contexts/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext);

    return (
        <div className='food-item mt-5 w-full mx-auto rounded-2xl shadow-lg transition duration-300 fade-in'>
            <div className="food-item-image relative">
                <img src={url + "/images/" + image} alt="" className='rounded-t-2xl' />

                {/* for add item button */}
                {!cartItem?.[id]
                    ? <img
                        className='absolute bottom-3.75 right-3.75 w-8'
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt=""
                    />
                    : <div className='food-item-counter absolute bottom-3.75 right-3.75 flex items-center gap-1 bg-white rounded-full p-0.5'>
                        <img className='w-7 p-px' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItem?.[id]}</p>
                        <img className='w-7 p-px' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }

            </div>
            <div className="food-item-info p-5  flex flex-col  gap-2">
                <div className='flex justify-between items-center'>
                    <p className='text-lg font-semibold'>{name}</p>
                    <img className='w-17.5' src={assets.rating_starts} alt="" />
                </div>
                <p className='text-sm text-gray-500'>{description}</p>
                <p className='text-[#FF6347] font-medium text-xl'>₹{price}</p>
            </div>

        </div>
    )
}

export default FoodItem
