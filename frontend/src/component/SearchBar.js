import React from 'react'
import './SearchBar.css';
import {BsSearch} from "react-icons/bs";


export default function SearchBar() {
  return (
    <div className='flex items-center justify-center w-auto p-0.5 text-white bg-white border-2 border-black rounded-3xl'>
      <span><BsSearch color='black'/></span>
      <input type='text' className='px-[5px] py-[6px] rounded-2xl border-black border-1 cursor-text'></input>
      <button type='submit' className='bg-black rounded-2xl flex px-[8px] py-[6px] justify-center cursor-pointer'><span>Search</span></button>
    </div>
  )
}


