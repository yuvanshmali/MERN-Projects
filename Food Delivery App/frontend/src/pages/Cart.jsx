import React, { useContext } from 'react'
import { StoreContext } from '../contexts/StoreContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItem, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items-title grid grid-cols-6 text-center border-b-2 border-gray-200 pb-2 mb-5 mt-20 font-medium text-gray-400 ">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      {food_list.map((item, index) => {
        if (cartItem[item._id] > 0) {
          return (
            <div key={item._id} className='cart-items-item grid grid-cols-6 text-center mb-3 md:mb-4 border-b border-gray-200' >
              <img className='w-12 h-12 rounded-full mx-auto' src={url+"/images/"+item.image} alt="" />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <p>{cartItem[item._id]}</p>
              <p>₹{item.price * cartItem[item._id]}</p>
              <div className='flex justify-center gap-1'>
                <img onClick={() => removeFromCart(item._id)} className='w-7 h-7 cursor-pointer' src={assets.remove_icon_red} alt="" />
                <img onClick={() => removeFromCart(item._id)} className='w-7 h-7 cursor-pointer' src={assets.add_icon_green} alt="" />
              </div>
            </div>
          )
        }
      })}

      <div className="cart-bottom flex flex-col-reverse md:flex-row justify-between md:mt-10">
        <div className="left w-[80%] md:w-[40%] flex flex-col gap-3">
          <h2 className='font-bold text-2xl '>Cart Total</h2>
          <div className='sub-total flex justify-between font-medium text-gray-400 border-b border-gray-200'>
            <p>Sub Total</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <div className='delivery-charge flex justify-between font-medium text-gray-400 border-b border-gray-200'>
            <p>Delivery Fee</p>
            <p>{getTotalCartAmount()==0?0:"₹80"}</p>
          </div>
          <div className='total flex justify-between font-medium text-gray-600 border-b border-gray-200'>
            <p>Total</p>
            <p>{getTotalCartAmount()===0?0:`₹${getTotalCartAmount()+80}`}</p>
          </div>
          <button onClick={()=>navigate("/order")} className='bg-[#FF6347] text-white w-fit px-4 py-2 rounded my-5 cursor-pointer'>Proceed to Checkout</button>
        </div>


        <div className="right my-10 ">
          <p className='font-medium'>If you have a promo code, Enter it here</p>
          <div className='cart-promocode '>
            <input type="text" placeholder='promo code' className='bg-gray-200 rounded-l text-sm py-2.5 px-2 md:pr-35' />
            <button type='submit' className='bg-black text-white rounded-r py-2 px-12 md:px-15 cursor-pointer'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
