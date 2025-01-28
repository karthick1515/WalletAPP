import { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
const [loginData,setLoginData]=useState({email:'',password:''});
const navigate=useNavigate();

  const handleChange=(e)=>
    {
      e.preventDefault();
   setLoginData({...loginData,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:8082/api/walletaccount/login",loginData)
      .then((response)=>{
        alert("Logged In Successfully!");
        localStorage.setItem('id', response.data.id);
        navigate('/dashboard');
      }
      ).catch((error)=>{
        alert(error.response.data);
      });
    }

    return(
          <body className='login-body'>
  <div class="head"><h2>Wallet Login</h2></div>
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="login-container">
      <a className='nav-link' href="/">Home</a>
      <span></span>
            <a class='nav-link' href="/signup">Sign Up</a>
    </div>
  </nav>
  <table className='login-table'>
    <tr>
      <td>
        <img className='login-img' src="https://lh4.googleusercontent.com/proxy/pONrw1m5Xiw12P_9NYPAFwWJLzCwTMzVHSp74dz7LMmio2Q4rvaoZRz5T4HpfheGn8gVQEpIag"></img>
      </td>
      <td>
<form class="form-horizontal" onSubmit={handleSubmit}> 
 
<div class="login-form">
    <h4>Enter The Credentials</h4>
    <hr></hr>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email"name='email' value={loginData.email} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" required ></input>
        
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" name="password" value={loginData.password} onChange={handleChange} required></input>
      </div>
     
      <button type="submit">Login</button>
      <p></p>
      <a href="/forgotpassword">forgot password </a><br/>Or<br/>
      <a href="/signup">signup</a>&nbsp; &nbsp;<>if don't have account</>
      
      <p></p>
  </div>
  </div>
</form>
</td>
</tr>
</table>
</body>
    )
}
export default Login;