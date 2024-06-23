import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [email , setEmail] = useState();
    const [password, setPassword] = useState();
    
    function handleEmailChange(event){
        event.preventDefault();
        setEmail(event.target.value);
    }
    function handlePasswordChange(event){
        event.preventDefault();
        setPassword(event.target.value);
    }

    function LoginSubmit(){}


  return (
    <div className="container">
  <div className="card">
    <h2>Login</h2>
    <form>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" placeholder="Enter your username" value={email} onChange={handleEmailChange}/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
      <button type="submit" onClick={LoginSubmit}>Login</button>
    </form>
  </div>
</div>


  )
}

export default Login