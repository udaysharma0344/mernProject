import React, { useEffect, useState } from 'react'
import './Login.css'
import {useDispatch , useSelector} from 'react-redux'
import login from "../../redux/action/User.action"

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

    function LoginSubmit(){
      if(!email || !password ){
        return;
      }
      dispactch(login(email, password));
    }

    useEffect(()=>{
      if(isAuth) {
        // navigate to home page
      }
      if(error){
        dispactach({
          type: "clearMessage",
        });
      }
    },[isAuth,isLoading , error]);


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