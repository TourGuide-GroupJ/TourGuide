import React from 'react'
import Button1 from '../component/Button1'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
/*
<button type="button" value="" className='py-4 px-8 rounded-xl bg-[#0e7490] hover:bg-[#0891b2] text-slate-100'><span>Traveller</span></button>

<button type="button" value="" className='py-4 px-8 rounded-xl bg-[#0e7490] hover:bg-[#0891b2] text-slate-100'><span>Hotel</span></button>
<button type="button" value="" className='py-4 px-8 rounded-xl bg-[#0e7490] hover:bg-[#0891b2] text-slate-100'><span>Guide</span></button>
<button type="button" value="" className='py-4 px-8 rounded-xl bg-[#0e7490] hover:bg-[#0891b2] text-slate-100'><span>Hire & rent vehical</span></button>
<button type="button" value="" className='py-4 px-8 rounded-xl bg-[#0e7490] hover:bg-[#0891b2] text-slate-100'><span>Camping Item</span></button> */

export default function CreateAccount() {
    return (
        <div>
            <div><Navbar /></div>
            <div className='mt-[91px]'>
            <div className='flex flex-col gap-3'>
                <p className='text-3xl font-semibold text-center'>Create Your Account</p>
                <p className='ml-3 text-2xl font-semibold'>As a</p>
                <div className='flex flex-col gap-3 ml-9'>
                    <p className='text-xl'>User</p>
                    <div className='lg:flex lg:flex-row lg:gap-3 md:flex md:flex-row md:gap-3 sm:grid sm:grid-rows-4 sm:grid-cols-1 sm:gap-3'>
                        <div>
                            <Button1 btnName="Traveller" />
                        </div>
                        <div>
                            <Link to="/Admin"><Button1 btnName="Admin" /></Link>
                        </div>
                    </div>
                </div>

                <hr className='w-full border-2' />

                <div className='flex flex-col gap-3 ml-9 lg:h-[332px] lg:w-[800px] md:h-[334px] md:w-[500px] sm:h-[347px]'>
                    <p className='text-xl'>Service Provider</p>
                    <div className='lg:flex lg:flex-row lg:gap-3 md:grid md:grid-rows-2 md:grid-cols-2 md:gap-3 sm:grid sm:grid-rows-4 sm:grid-cols-1 sm:gap-3'>
                        <Button1 btnName="Hotel Owner" />
                        <Link to="/GuideReg"><Button1 btnName="Guide" /></Link>
                        <Button1 btnName="Driver/Rent vehicals" />
                        <Link to="/GuideProf"><Button1 btnName="Rent Camping Items" /></Link>

                    </div>
                </div>
            </div>
            <div><Footer /></div>
            </div>
        </div >
    );
}
