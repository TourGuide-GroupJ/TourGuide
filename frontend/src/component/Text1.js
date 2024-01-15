import React from 'react'

export default function Text1(props) {
  return (
    <div>
         <input type="text" name={props.name} id={props.id} placeholder={props.plcHolder}  size={props.txt} maxLength={props.max} onChange={props.func1} className='rounded-xl border-[#94a3b8] border-2' />
    </div>
  )
}

function Text2(props) {
  return (
    <div>
         <input type={props.type} name={props.name} id={props.id} value={props.value} size={props.txt} maxLength={props.max} onChange={props.func1} className='rounded-xl border-[#94a3b8] border-2' />
    </div>
  )
}
export{Text2}

function Text3(props) {
  return (
    <div>
         <input type={props.type} name={props.name} id={props.id} value={props.value} size={props.txt} maxLength={props.max} readOnly className='rounded-xl border-[#94a3b8] border-2' />
    </div>
  )
}
export{Text3}

function Password(props) {
    return(
        <input type={props.type} name={props.name} id={props.id} placeholder={props.plcHolder}  size={props.txt} onChange={props.func1} className=' rounded-xl border-[#94a3b8] border-2' />  
    )    
}
export{Password}

function Mail(props){
    return(
        <input type="email" name={props.name} id={props.id} placeholder={props.plcHolder}  size={props.txt} onChange={props.func1} className=' rounded-xl border-[#94a3b8] border-2' />
    )
}
export{Mail}

