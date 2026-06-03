import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Order = ({ url }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + '/api/order/list');
    if (response.data.success) {
      setOrders(response.data.data);
    }
    else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [])

  const statusHandler = async (event, orderId)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  return (
    <div className='order w-[70%] ml-[max(5vw,25px)] mt-10 text-[#6d6d6d] text-sm'>
      <h2 className='text-xl font-bold'>Order Page</h2>

      <div className="order-list">

        {/* whenever we use curly braces while using map method then we have to write "return" if we use "()" then we don't have to use return" */}
        {orders.map((order, index) => (
          <div key={index} className='order-item grid grid-cols-[0.5fr_2fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] items-start gap-4 md:gap-8 border border-[tomato] my-5 py-4 px-2 md:p-3 text-[12px] md:text-sm text-[#505050]'>

            <img className='w-10 md:w-15' src={assets.parcel_icon} alt="" />

            <div>
              <p className='order-item-food font-semibold'>
                {order.items.map((item, index) =>
                  index === order.items.length - 1
                    ? item.name + " x " + item.quantity
                    : item.name + " x " + item.quantity + ", "
                )}
              </p>
              <p className='font-semibold mt-2  md:mt-4 mb-1'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='mt-2 md:mt-5'>
                <p>{order.address.street}</p>
                <p>
                  {`${order.address.state}, ${order.address.city}, ${order.address.country}, ${order.address.zipcode}`}
                </p>
              </div>
              <p className='mt-2'>{order.address.phone}</p>
            </div>

            <p>Items : {order.items.length}</p>

            <p>₹{order.amount}</p>

            {/* Change Food Status */}
            <select onChange={(event)=>statusHandler(event, order._id)} value={order.status} className='bg-[#ffe8e4] border border-[tomato] w-[max(11vw,120px)] p-1 md:p-2.5 outline-none md:text-[12px]'>
              <option value="Food Processing">Food Processing</option>
              <option value="Out Of Delivery">Out Of Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Order
