import { useEffect, useState } from 'react';
import './profile.css';
import axios from 'axios';
const Profile =()=>
{
const [wallet,setWallet]=useState('');

const id=localStorage.getItem('id');
useEffect(() => {
  axios.get('http://localhost:8082/api/walletaccount/get', {
    params: {
      id: id
    }
  })
    .then((response) => {
      setWallet(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}, [id]);
console.log(wallet);
 return(
<body className='profile-body'>
<h2>Profile</h2>
<div class="profile">
    <div>
      <p  className='profile-p'>Name:{wallet.fullName}</p>
      <p className='profile-p'>Email:{wallet.emailAddress} </p>
      <p className='profile-p'>Password:******</p>
      <p className='profile-p'>Wallet ID:{wallet.id}</p>
      <p className='profile-p'>Wallet PIN:****</p>
      <p className='profile-p'>Phone Number:{wallet.phoneNumber}</p>
      <p className='profile-p'>Date of Birth:{wallet.dateOfBirth} </p>
      <p className='profile-p'>Address: {wallet.address}</p>
      <p className='profile-p'>Balance :{wallet.balance }</p>
    </div>
   &nbsp; <a href="/dashboard"><button> Go Back</button></a>
  </div>
 

</body>
    );
}
export default Profile;