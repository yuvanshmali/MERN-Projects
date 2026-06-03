import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../contexts/StoreContext';
import axios from "axios";
import { assets } from '../assets/assets';

const MyOrders = () => {

    const [data, setData] = useState([]);
    const { url, token } = useContext(StoreContext);

    const fetchOrders = async () => {
        // using axios, receive userorders data by sending token
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(response.data.data);

        console.log(response.data.data);
    }

    // Whenever the token will be updated this fetchOrders() will be updated
    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-orders my-12 '>
            <h2 className='text-2xl font-bold'>My Orders</h2>
            <div className="container flex flex-col gap-5 mt-8">
                {data.map((order, index) => {
                    return (
                        <div key={index} className='my-orders-order grid grid-cols-[1fr_2fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-y-1.25 md:gap-7.5 text-[12px] md:text-[14px] py-2.5 px-5 text-[#454545] border border-[tomato]'>
                            <img className='w-12.5' src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item, index) => {
                                // if statement of , in each items except last one
                                if (index === order.items.length - 1) {
                                    return item.name + " x " + item.quantity
                                } else {
                                    return item.name + " x " + item.quantity + ", "
                                }
                            })}</p>
                            <p>₹{order.amount}.00</p>
                            <p>Items: {order.items.length}</p>
                            <p>
                                <span className='text-[tomato]'>&#x25cf;</span>
                                <b className='font-medium text-[#454545]'>{order.status}</b>
                            </p>
                            <button onClick={fetchOrders()} className='bg-[#ffe1e1] border-0 rounded-sm py-3 cursor-pointer text-[#454545] text-[10px] md:text-[14px]'>Track Order</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders
