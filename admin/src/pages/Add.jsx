import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad",
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);

        const response = await axios.post(`${url}/api/food/add`, formData);

        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad",
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)
        }
    }

    return (
        <div className='add w-[70%] ml-[max(5vw,25px)] mt-10 text-[#6d6d6d] text-sm'>
            <form onSubmit={onSubmitHandler} className='flex flex-col gap-2'>
                <div className="add-image-upload flex flex-col gap-2">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img className='w-30' src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' name='image' hidden required />
                    {/* `e.target.files[0]` will take the selected file and set its value as an image using `setImage`. If we log `e.target.files[0]` to the console, it will return a file object, but the image tag requires a URL.  `URL.createObjectURL` then creates a temporary URL for that file containing the image. This temporary URL is stored in the device's RAM and remains available as long as the application is running. */}
                </div>
                <div className="add-product-name flex flex-col gap-2 w-[max(40%,280px)]">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} className='border-[1.5px] border-gray-400 rounded-xs p-2.5' type="text" id='name' name='name' placeholder='Type here' />
                </div>
                <div className="add-product-description flex flex-col gap-2 w-[max(40%,280px)]">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} className='border-[1.5px] border-gray-400 rounded-xs p-2.5' name="description" rows="6" placeholder='Write content here' required></textarea>
                </div>
                <div className="add-category-price flex gap-8">
                    <div className="add-category flex flex-col gap-2">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} value={data.category} className='border-[1.5px] border-gray-400 rounded-xs max-w-30 p-2.5' name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex flex-col gap-2">
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} className='border-[1.5px] border-gray-400 rounded-xs max-w-30 p-2.5' type="text" name='price' placeholder='₹149' />
                    </div>
                </div>
                <button className='max-w-30 border-none p-2.5 bg-black text-white rounded-xs cursor-pointer' type="submit">ADD</button>
            </form>

        </div>
    )
}

export default Add