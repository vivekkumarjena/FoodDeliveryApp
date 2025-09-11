import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currState , setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className='login-popup-container' action="">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing , I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"?
             <p>Create a new Account?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:
             <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
