import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  const removeFood = async (foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();

    if (response.data.success) {
      toast.success(response.data.message)
    } else {
      toast.error("Error")
    }
  }


  return (
    <div className='list w-[70%] ml-[max(5vw,25px)] mt-10 text-[#6d6d6d] text-sm flex flex-col gap-2'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format hidden md:grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] place-items-center  gap-4 md:gap-2.5 py-3 px-4 border border-[#cacaca] bg-[#f9f9f9] ">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] place-items-center gap-4 md:gap-2.5 py-3 px-4 border border-[#cacaca]'>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor-pointer'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
