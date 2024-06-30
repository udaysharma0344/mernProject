import React, {useEffect , useState} from 'react'
import './Login.css'
import {useDispatch , useSelector} from 'react-redux'
import { login } from '../../redux/action/user.action'
import toast from 'react-hot-toast'
import { useNavigate} from 'react-router-dom'



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuth , isLoading  , error ,user , clearMessage} = useSelector((state)=>state.user) // creatSlice > state > access

const navigate = useNavigate();
const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password))
  };
  console.log(user)

  useEffect(()=>{
     if(isAuth){
           toast.success("Login Successful")
           navigate('/home')
     }
   
     if(error){
           toast.error(error)
           dispatch({type:clearMessage}) 
           console.log(error)
     }
   
    
  // console.log(isLoading)
  // console.log(token)
  },[isAuth,error])


//   const [passwordType, setPasswordType] = useState("password")
//   const [passwordCheckbox , setPasswordCheckbox] = useState(false)
//   function togglePasswordVisibility() {
//     setPasswordCheckbox((pre)=>!pre)    
//     passwordCheckbox ? setPasswordType("password") : setPasswordType("text");
// }

const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
  //   <div className="container">
  //   <div className="card">
  //     <h2>Login</h2>
  //     <form onSubmit={submitHandler}>
  //       <label htmlFor="username">Username</label>
  //       <input type="email" id="username" placeholder="Enter your username" value={email} onChange={(e)=> setEmail(e.target.value)}/>
  //       <label htmlFor="password">Password</label>
  //       <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} />
  //       <button type="submit" >Login</button>
  //     </form>
  //   </div>
  // </div>

 <div className="container">
  <div className="left-section" />
  <div className="right-section">
    <div className="login-container">
      <form className="login-form" onSubmit={submitHandler}>
        <h2 className="login-title"> Welcome Back To Dukan </h2>
        <div className="form-control">
          <i className="fas fa-user icon" />
          <input type="email" placeholder="User Email" id="username" required value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <i className="fas fa-lock icon" />
          <input type={showPassword ? "text" : "password"} placeholder="Password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className="remember-me">
          <div>
          <input type="checkbox" id="showPasswordCheckbox"  onChange={togglePasswordVisibility} className="checkbox-input" />
          <span className="checkbox-custom"/>
          <label htmlFor="showPasswordCheckbox" >Show Password</label>
          </div>
          <div>
            <a href='#' className='forgot-password'>Forgot Password</a>
          </div>
        </div>

        {/* <div className="social-login">
          <i className="fab fa-google social-icon" />
          <i className="fab fa-facebook-f social-icon" />
          <i className="fab fa-twitter social-icon" />
        </div> */}
        
        <button type="submit">Login</button>

        <div className="sign-link">
            <p>Don't have an account? <a href="#" className="signUp-link">Sign Up</a></p>
        </div>

      </form>
    </div>
  </div>
</div>

  
  )
}

export default Login