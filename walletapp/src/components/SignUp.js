import { useState } from 'react';
import './signup.css'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function SignUp(){
   
  const [signupData,setSignupData]=useState({fullName:'',emailAddress:'',password:'',walletPin:'',phoneNumber:'',dateOfBirth:'',address:'',balance:0,transactions:[]});
  
  const handleChange=(e)=>{
     e.preventDefault();
     setSignupData({...signupData,[e.target.name]:e.target.value});
  }
const navigate=useNavigate();
 
const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post("http://localhost:8082/api/walletaccount/create", signupData)
    .then((response) => {
       
            alert("Account created");
       navigate('/login')
    })
    .catch((error) => {
        alert("Error: " + error.response.data);
    });    
  }

  return(
   <>

<div className='signup-div'>
 
      <h1 className='h1-create-account'>Create Account</h1>
      <div className='signup-div'>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="nav-link"  to="/">Home</Link>
        <span></span>
         <Link className='nav-link' to="/login">Login</Link>
        </nav>
            </div>
<table className='signup-table'>
  <tr><td>
    <div class="wallet-form">
      <form onSubmit={handleSubmit}>
        <h2>Fill the Details</h2>
        <div class="form-group">
          <label for="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required
               value={signupData.fullName} onChange={handleChange}  pattern="^[A-Za-z ]+$" maxlength="20"></input>
        </div>

        <div class="form-group">
          <label for="emailAddress">Email Address:</label>
          <input type="email" id="emailAddress" name="emailAddress" required
          value={signupData.emailAddress} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"></input>
        </div>
    
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required
          value={signupData.password}  onChange={handleChange}  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$"></input>
        </div>
    
        <div class="form-group">
          <label for="walletPin">Wallet PIN:</label>
          <input type="password" id="walletPin" name="walletPin"  required
              value={signupData.walletPin} onChange={handleChange}   pattern="^[1-9][0-9]{3,5}$" minlength="4" maxlength="6"></input>
        </div>
    
        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" required
                value={signupData.phoneNumber} onChange={handleChange} minlength="10" maxlength="10" pattern="^[0-9]+$"></input>
        </div>
    
        <div class="form-group">
          <label for="dateOfBirth">Date of Birth:</label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" value={signupData.dateOfBirth} onChange={handleChange} required></input>
        </div>
    
        <div class="form-group">
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" value={signupData.address} onChange={handleChange} required minlength="20" maxlength="200"></input>
        </div>
        
    
        <button className='create-account-btn' type="submit" >Create Account</button>
      </form>
    </div></td>
    <td>
      <img className='signup-img' src="https://img.freepik.com/free-photo/3d-cryptocurrency-rendering-design_23-2149074564.jpg"></img>
    </td>
    </tr>
  </table>
  
</div>

</>)

}