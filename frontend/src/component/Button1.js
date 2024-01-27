import React from 'react'

export default function Button1(props) {
  return (
    <div>
      <button type="button" onClick={props.Click1} className='lg:py-4 lg:px-8 md:py-4 md:px-8 sm:py-2 sm:px-4 rounded-xl bg-[#0e7490] hover:bg-[#0891b2] text-slate-100'><span>{props.btnName}</span></button>
    </div>
  )
}

function Button2(props) {
  return (
    <div>
      <button type="submit" onClick={props.Click2} className='lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 rounded-xl bg-[#0e7490] hover:bg-[#0891b2] text-slate-100'><span>{props.btnName}</span></button>
    </div>
  )
}
export{Button2}

function Button3(props) {
  return(
    <div>
      <button type="reset" value="clear" onClick={props.Click3} className='lg:py-2 lg:px-6 md:py-2 md:px-4 sm:py-2 sm:px-4 rounded-xl bg-[#0e7490] hover:bg-[#0891b2] text-slate-100'><span>{props.btnName}</span></button>
    </div>
  )
}
export{Button3}

