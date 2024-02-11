import React, { useState } from 'react'
import axios from 'axios';
// import {BiUser} from "react-icons/bi";
// import {AiOutlineUnLock} from "react-icons/ai";

const UserSignup = () => {
    const [userSignup, setUserSignup] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const saveUserData = (e) => {
        setUserSignup({ ...userSignup, [e.target.name]: e.target.value });
      };
    
      const UserRegister = async (e) => {
        e.preventDefault();

        
        try {
          const response = await axios.post('http://localhost:4000/register', userSignup);
          console.log('Signup successful:', response.data);
          // Handle successful signup, e.g., redirect to another page
        } catch (error) {
          console.error('Signup error:', error);
          // Handle signup error, e.g., display error message to the user
        }
      };
    
    
  return (
    <div className="flex justify-center  items-center bg-[#e5e7eb] h-[100vh] "  >
    <div className="relative p-8 rounded-md shadow-lg bg-slate-800 border-slate-400 backdrop-filter backdrop-blur-sm bg-opacity-30">
        <h1 className="mb-6 text-4xl text-center text-whitefont-bold">Register</h1>
        <form action="">

        <div className="relative my-4">
            <input type="firstName" name="firstName" className='block w-72 py-2.3 px-0 text-sm text-[#163e63] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' onChange={saveUserData}/>
            <label htmlFor="" className='mt-2 absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' >First Name</label>
            {/* <BiUser className='absolute top-4 right-4'/> */}
        </div>
        <div className="relative my-4">
            <input type="lastName" name="lastName" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' onChange={saveUserData}/>
            <label htmlFor="" className='mt-2 absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' >Last Name</label>
            {/* <BiUser className='absolute top-4 right-4'/> */}
        </div>

        <div className="relative my-4">
            <input type="email" name="email" className=' block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder='' onChange={saveUserData}/>
            <label htmlFor="" className='mt-2 absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' >Your Email</label>
            {/* <BiUser className='absolute top-4 right-4'/> */}
        </div>
        <div className="relative my-4">
            <input type="password" name="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'placeholder='' onChange={saveUserData}/>
            <label htmlFor="" className='mt-2 absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' >Your Password</label>
            {/* <AiOutlineUnLock className='absolute top-4 right-4'/> */}
        </div>

        <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' type="submit" onClick={UserRegister}>Register</button>
        {/* <div>
            <span className='m-4'>Already Create an Account? <Link className="text-blue-500" to='/Login' >Login</Link></span>
        </div> */}
        </form>
    </div>
</div>
  )
}

export default UserSignup;