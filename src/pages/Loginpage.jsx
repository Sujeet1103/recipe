import React, { useState } from 'react'

function Loginpage () {
  const[nameValue,setnameValue]=useState("");
  const[emailValue,setemailValue]=useState("");
  const[passwordValue,setpasswordValue]=useState("");
  const[addressValue,setaddressValue]=useState("");
  const nameChanger =(event)=>{
    let name = event.target.value
    setnameValue(event.target.value)
  }
  const emialChanger =(event)=>{
    let email = event.target.value
    setemailValue(event.target.value)
  }
  const passwordChanger =(event)=>{
    let password = event.target.value
    setpasswordValue(event.target.value)
  }
  const addressChanger =(event)=>{
    let address = event.target.value
    setaddressValue(event.target.value)
  }
  const handleclick=(e)=>{
    e.preventDefault()
    let obj={
      name:nameValue,
      email:emailValue,
      password:passwordValue,
      address:addressValue
    }
  }
  return (
    <div>
   <from className="login">
    <label htmlFor='' >Name</label>
      <input type='text' onChange={nameChanger}/>
      <label htmlFor='' >Email</label>
      <input type='email' onChange={emialChanger} />
      <label htmlFor='' >Password</label>
      <input type='password' onChange={passwordChanger}/>
      <label htmlFor='' >Address</label>
      <input type='text' onChange={addressChanger}/>
      <button onClick={handleclick}>Submit</button>
   </from>

    </div>
  )
}

export default Loginpage 
