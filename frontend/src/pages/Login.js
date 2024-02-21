import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/* (Event) => Handleclick(Event) 
const [data, setData] = useState();

const handletext = (Event) => {
     setData({ ...data, [Event.target.name]: Event.target.value });
     console.log(data);

*/


export default function Login() {
    const [userData, setuserData] = useState({ userName: "", Pswd: "" });

    const handletext = (Event) => {
        setuserData({ ...userData, [Event.target.name]: Event.target.value });
        console.log(userData);
    }

    const handleclick = async(Event) => {
        Event.preventDefault();
        if (userData.userName === "" & userData.Pswd === "") {
                alert("Please insert your User Name/E-mail and Password");
        }
        else {
            if (userData.userName === "") {
                alert("Please insert your User Name/E-mail");
            }
            if (userData.Pswd === "") {
                alert("Please insert your Password");
            }
            const email =userData.userName;
            const password =userData.Pswd;
            try {
                const response = await axios.post('http://localhost:4000/login', {email,password});
                console.log('Signup successful:', response.data);
                // Handle successful signup, e.g., redirect to another page
                
              } catch (error) {
                console.error('Signup error:', error);
                // Handle signup error, e.g., display error message to the user
              }
        }
    }

    return (
        <div className='flex justify-center bg-[#e5e7eb] h-[100vh]'>
            <div className='lg:mt-[15vh] sm:mt-[5vh] mx-auto flex flex-col gap-6 rounded-xl p-4 lg:w-[500px] lg:h-[550px] sm:w-[300px] sm:h-[440px] bg-white justify-center'>
                <div></div>
                <div className='flex justify-center'><span className='text-xl font-semibold'>Sign in to your account</span></div>
                <form action="" method="GET" name='logInForm' className='flex flex-col gap-6'>
                    <div className='flex flex-col'><span>User name or E-mail</span>
                        <input type="text" name="userName" id="userName" onChange={handletext} className='px-8 py-2 rounded-xl border-[#94a3b8] border-2' /></div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-between'><span>Password</span><a href="./#"><span className='text-[#164e63] hover:text-[#0e7490]'>Forget password?</span></a></div>
                        <div><input type="password" name="Pswd" id="Pswd" onChange={handletext} className='w-full px-8 py-2 rounded-xl border-[#94a3b8] border-2' /></div>
                    </div>
                    <div className='flex justify-center'><button type="submit" onClick={handleclick} name='logIn' className='py-2 px-8 rounded-xl bg-[#0e7490] w-full hover:bg-[#0891b2]'><span className='text-white'>Sign in</span></button></div>
                </form>
                <div className='flex flex-row justify-center'><span className='text-lg'>OR</span></div>
                <Link to="/CreateAccount"><div className='flex justify-center'><button type="button" value="" className='px-8 py-2 rounded-xl bg-[#0e7490] w-full hover:bg-[#0891b2]'><span className='text-white'>Create new account</span></button></div></Link>
            </div>
        </div>
    )
}
