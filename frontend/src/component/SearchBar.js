import React from 'react'
import {BsSearch} from "react-icons/bs";


export default function SearchBar(props) {
  return (
    <div className='flex flex-row items-center justify-center p-0.5 bg-white border-2 border-black rounded-3xl'>
      <span><BsSearch color='black'/></span>
      <input type='text' name={props.name} id="" placeholder={props.plcHolder}  size={props.txt} maxLength={props.max} onChange={props.func1} className='px-[5px] py-[6px] rounded-2xl border-black border-1 cursor-text'></input>
      <button type='submit' onClick={props.search} className='bg-black rounded-2xl flex px-[8px] py-[6px] justify-center cursor-pointer'><span className='text-white'>Search</span></button>
    </div>
  )
}
