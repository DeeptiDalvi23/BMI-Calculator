import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [weight,setWeight]=useState(0)
  const [height,setHeight]=useState(0)

  const [bmi,setBMI]=useState('')
  const [message,setMessage]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(weight===0 || height===0){
      alert('enter valid weight and height')
    }
    else{
      let bmi=(weight/(height*height)*703)
      setBMI(bmi.toFixed(1))

      if(bmi<25){
        setMessage("You are under weight!!")
      }
      else if(bmi>=25 && bmi<30){
        setMessage("You are healthy!!")
      }
      else{
        setMessage("You are over weight!!")
      }


    }
  }

  const reload=()=>{
    window.location.reload()
  }
  return (
    <div className='bmi'>
      <h1>BMI Calculator</h1>
      <form action="" onSubmit={handleSubmit}className='bmi-form'>
      <div className='weight'>
        <label htmlFor="">Weight(lbs)</label>
        <input className='input' type="text" placeholder='enter weight value' value={weight} onChange={(e)=>setWeight(e.target.value)} />
      </div>
      <div className='height'>
        <label htmlFor="">Height(in)</label>
        <input className='input' type="text" placeholder='enter height value' value={height} onChange={(e)=>setHeight(e.target.value)} />
      </div>
      <div className='btns'>
        <button className='submit-btn' type='submit'>Submit</button>
        <button className='reload-btn' onClick={reload}>Reload</button>
      </div>
      <div className='msg' >
        <h3>Your BMI is:{bmi}</h3>
        <p>{message}</p>
      </div>
      </form>
      
    
    </div>
  )
}

export default App
