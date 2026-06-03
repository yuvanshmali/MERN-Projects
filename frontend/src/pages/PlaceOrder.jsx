import React, { useContext, useState, useEffect } from 'react'
import { StoreContext } from '../contexts/StoreContext'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItem, url, setCartItem } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }


  const placeOrder = async (event) => {


    event.preventDefault();

    let orderItems = [];

    // Process only the food items that have been added to the cart
    // We are adding the all item data with the quantity in this orderItems array
    food_list.map((item) => {

      if (cartItem[item._id] > 0) {
        let itemInfo = { ...item };
        itemInfo["quantity"] = cartItem[item._id];
        orderItems.push(itemInfo);
        // Attach the item quantity and push the formatted item into the orderItems array
      }

    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 80,
    };

    // Send order data to backend

    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });

    if (response.data.success) {

      // collecting the data in the order variable which we created in the order variable in razorpay order in the backend,
      const order = response.data.order;

      const options = {
        key: "rzp_test_St58cFCzQRdlMV", // Razorpay key
        amount: order.amount,
        currency: order.currency,
        name: "Food Delivery",
        description: "Order Payment",
        order_id: order.id,

        handler: async function (response) {

          // Verify payment (Verify response ko backend ko bhej rhe h)
          let verifyResponse = await axios.post(url + "/api/order/verify",
            {
              orderId: order.receipt,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }, { headers: { token } }
          );

          if (verifyResponse.data.success) {
            setCartItem({});
            navigate("/myorders");
          } else {
            alert("Payment Failed")
            navigate("/");
          }
          // This else will execute when the error will come from backend
        },
        // This will execute when the user will cancel the payment
        modal: {
          ondismiss: function () {
            alert("Payment Cancelled");
            navigate("/");
          }
        },
        theme: { color: "#000000" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } else {
      alert("Error");
    }
  };


  // Now we have to verify the order ( so go to backend's orderController)

  // If user is logout 
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token])

  return (
    <form onSubmit={placeOrder}>
      <div className='place-order w-full mt-20 mb-30 flex flex-col md:flex-row justify-between'>

        <div className="left ">
          <p className='text-3xl font-bold mb-5'>Delivery Information</p>

          <div className="inputs flex flex-col gap-3">
            <div className="multi-fields flex gap-2">
              <input name="firstName" onChange={onChangeHandler} value={data.firstName} required type="text" placeholder='First name' className='border border-gray-300 rounded-sm w-42.5 md:w-50 py-1 px-1 ' />
              <input name="lastName" onChange={onChangeHandler} value={data.lastName} required type="text" placeholder='Last name' className='border border-gray-300 rounded-sm w-42.5 md:w-50 py-1 px-1 ' />
            </div>

            <input name="email" onChange={onChangeHandler} value={data.email} required type="email" placeholder='Email address' className='border border-gray-300 rounded-sm w-87 md:w-102 py-1 px-1 ' />

            <input name="street" onChange={onChangeHandler} value={data.street} required type="text" placeholder='Street' className='border border-gray-300 rounded-sm w-87 md:w-102 py-1 px-1' />

            <div className="multi-fields flex gap-2">
              <input name="city" onChange={onChangeHandler} value={data.city} required type="text" placeholder='City' className='border border-gray-300 rounded-sm w-42.5 md:w-50 py-1 px-1 ' />
              <input name="state" onChange={onChangeHandler} value={data.state} required type="text" placeholder='State' className='border border-gray-300 rounded-sm w-42.5 md:w-50 py-1 px-1 ' />
            </div>

            <div className="multi-fields flex gap-2">
              <input name="zipcode" onChange={onChangeHandler} value={data.zipcode} required type="text" placeholder='Zip code' className='border border-gray-300 rounded-sm w-42.5 md:w-50 py-1 px-1 ' />
              <input name="country" onChange={onChangeHandler} value={data.country} required type="text" placeholder='Country' className='border border-gray-300 rounded-sm w-42.5 md:w-50 py-1 px-1 ' />
            </div>

            <input name="phone" onChange={onChangeHandler} value={data.phone} required type="text" placeholder='Phone no.' className='border border-gray-300 rounded-sm w-87 md:w-102 py-1 px-1 ' />
          </div>

        </div>

        <div className="right w-[80%] md:w-[40%] flex flex-col gap-3 mt-10 md:mt-0">
          <h2 className='font-bold text-2xl '>Cart Total</h2>
          <div className='sub-total flex justify-between font-medium text-gray-400 border-b border-gray-200'>
            <p>Sub Total</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <div className='delivery-charge flex justify-between font-medium text-gray-400 border-b border-gray-200'>
            <p>Delivery Fee</p>
            <p>{getTotalCartAmount() === 0 ? 0 : "₹80"}</p>
          </div>
          <div className='total flex justify-between font-medium text-gray-600 border-b border-gray-200'>
            <p>Total</p>
            <p>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 80}</p>
          </div>
          <button type='submit' disabled={getTotalCartAmount() === 0} className='bg-[#FF6347] text-white w-fit px-4 py-2 rounded my-5 cursor-pointer'>Proceed to Payment</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder