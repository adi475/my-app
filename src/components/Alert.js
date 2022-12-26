import React from 'react'

export default function Alert(props) {

    const capitalise = (word) =>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // we use 'And' logic here to resolve the problem of null initial value of alert state
    <div className='my-1' style={{height:"35px"}}>{ props.alrt && <div className="alert alert-success alert-dismissible fade show" role="alert">
    <strong>{capitalise(props.alrt.typ)}</strong>:{props.alrt.msg}
  </div>}</div>
   

  )
}
