import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../contexts/StoreContext'
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {

    const { url, setToken } = useContext(StoreContext)

    const [currState, setCurrState] = useState("Log In")

    // to send the data to backend
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault();

        let newUrl = url;
        if (currState === "Log In") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data);
        

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false);
        }
        else {
            alert(response.data.message);
        }
    }

    return (
        <div className='login-popup bg-[#000000c9] w-full h-screen absolute z-1 top-0 flex justify-center items-center'>
            <form onSubmit={onLogin} className="login-popup-container bg-white w-[85vw] md:w-[25vw] py-5 px-7 rounded-xl">
                <div className="login-popup-title flex justify-between">
                    <h2 className='font-bold text-2xl' >{currState}</h2>
                    <img className='w-4 h-4' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs my-5 flex flex-col gap-5">
                    {currState === "Log In"
                        ? <></>
                        : <input onChange={onChangeHandler} className='shadow rounded-sm pl-2 py-2' name='name' value={data.name} type="text" placeholder='Your name' required />
                    }
                    <input onChange={onChangeHandler} className='shadow rounded-sm pl-2 py-2' name='email' value={data.email} type="email" placeholder='Your email' required />
                    <input onChange={onChangeHandler} className='shadow rounded-sm pl-2 py-2' name='password' value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit' className='bg-[#FF6347] text-white w-full rounded-sm py-2 mb-2' >{currState === "Sign Up" ? "Create account" : "Log In"}</button>
                <div className="login-popup-condition flex  gap-2">
                    <input className='mb-4' type="checkbox" required />
                    <p className='text-sm font-light' >By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                <div className='mt-5' >
                    {currState === "Sign Up"
                        ? <p className='text-sm font-light'>Already have an account? <span className='text-[#FF6347] font-medium cursor-pointer' onClick={() => setCurrState("Log In")}>Log In here</span></p>
                        : <p className='text-sm font-light'>Create a new account? <span className='text-[#FF6347] font-medium cursor-pointer' onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    }
                </div>
                {/* to refuse logout system while refreshing the page , we write a code in storeContext */}
            </form>

        </div>
    )
}

export default LoginPopup
