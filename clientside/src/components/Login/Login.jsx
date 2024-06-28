import React, {useEffect , useState} from 'react'
import './Login.css'
import {useDispatch , useSelector} from 'react-redux'
import { login } from '../../redux/action/user.action'
import toast from 'react-hot-toast'



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuth , isLoading  , error ,user } = useSelector((state)=>state.user) // creatSlice > state > access

  // const navigate = useNavigate();
 const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password))
  };
  console.log(user)

  useEffect(()=>{
     if(isAuth){
           toast.success("Login Successful")
          //  navigate('/home')
     }
   
     if(error){
           toast.error(error)
           dispatch({type:clearMessage}) 
           console.log(error)
     }
   
    
    // console.log(isLoading)
   // console.log(token)
  },[isAuth,error])

  return (
    <div className="container">
    <div className="card">
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="email" id="username" placeholder="Enter your username" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button type="submit" >Login</button>
      </form>
    </div>
  </div>
  
  )
}

export default Login