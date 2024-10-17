import React from 'react'
import './CSS/LoginSignup.css'

const LoginSighnup = () => {
  return (
    <div className='loginignup'>
        <div className='loginsignup-container'>
            <h1>Sign In</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />

            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Alerady have an account? <span>SignIn</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing, I agree to the term of use & privacy policy</p>
            </div>

        </div>
      
    </div>
  )
}

export default LoginSighnup
