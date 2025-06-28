import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-[#e0cbb0] h-screen flex items-center justify-center">
        <div className=" md:w-[70%] lg:w-[40%] w-[90%] bg-yellow-50 p-6 rounded-lg shadow-lg">
          <div className="p-6 border border-gray-300 rounded-md">
            <h1 className="text-xl font-semibold mb-10 pb-2 border-b border-gray-300 tracking-widest uppercase">Login</h1>
            <from>
              <div className="mb-6">
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-300 outline-none " placeholder="Enter your Email" />
              </div>
              <div className="mb-6 relative">
                <input type={ showPassword === false ? "password":"text"} id="password" className="w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-300 outline-0" placeholder="Enter Password" />
                <span onClick={() => setShowPassword(!showPassword)} className=" absolute cursor-pointer text-gray-400 hover:text-green-900  right-[20px] bottom-[10px]  ">
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </span>
              </div>
              
              <Link to="dashboardlayout">
              <div className="mt-10">
                <button className="w-full p-2 bg-[#87a186] text-[#0E2A10] rounded-md hover:bg-[#0E2A10] hover:text-[#e0cbb0] md:uppercase tracking-widest ">Login</button>
              </div>
              </Link>

            </from>

            <div className="text-end">
              <Link  href="#" className="text-gray-400 text-sm hover:text-green-900 hover:underline ">Forget Password
              </Link>
            </div>

            <Link href="/">
              <div className="mt-10">
                <button className="w-full p-2 bg-[#87a186] text-[#0E2A10] rounded-md hover:bg-[#0E2A10] hover:text-[#e0cbb0] md:tracking-widest md:uppercase "> 
                <FcGoogle className="inline-block ml-2 me-2 bg-[#0E2A10] rounded-full  " size={25}/> Login with Google
                </button>
              </div>
              </Link>
          </div>
        </div>
      </div>
  )
}

export default Login