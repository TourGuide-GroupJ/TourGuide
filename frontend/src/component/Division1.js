import React from 'react'
// import './Division1.css';
/*style={{backgroundImage: 'url('+ prop.image +')'}}*/

export default function Division1(prop) {
  return (
    
    <div className="  w-[300px] h-[200px] border-2 border-white rounded-3xl shadow-md shadow-gray-400 relative hover:shadow-black">
      <h1 className='absolute text-[25px] font-bold text-white text-center left-2.5 right-2.5 top-2.5'>{prop.text}</h1>
      <img src={prop.image} alt={prop.name} className='w-[400px] h-auto rounded-3xl' />  
    </div>
  )
}
