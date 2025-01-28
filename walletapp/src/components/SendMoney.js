import { Link, useNavigate } from 'react-router-dom';
import './sendmoney.css';
import { useState } from 'react';
import axios from 'axios';

const SendMoney=()=>{

  const [sendmoney,setSendMoney]=useState({receiverId:'',amount:'',walletPin:''});
  const navigate=useNavigate();

  const walletAccountId=localStorage.getItem('id');
  const sendtransaction = {
    
    transactionType:'Debited',
    transactionDate: new Date().toISOString().split('T')[0],
    transactionTime: new Date().toLocaleTimeString(),
    senderorReceiverid:walletAccountId,
    amount:0    
  };
  const receivetransaction = {
    transactionType:'Credited',
    transactionDate: new Date().toISOString().split('T')[0],
    transactionTime: new Date().toLocaleTimeString(),
    senderorReceiverid:0,
    amount:0    
};

const handleChange=(e)=>{
e.preventDefault();
setSendMoney({
  ...sendmoney,[e.target.name]:e.target.value
})
}
const walletPin=sendmoney.walletPin;
const handleSubmit=(e)=>{
  e.preventDefault();
  const currentTime = new Date();
    const sendtransaction = {
      transactionType: 'Debited',
      transactionDate: currentTime.toISOString().split('T')[0],
      transactionTime: currentTime.toTimeString().split(' ')[0], 
      senderorReceiverid: parseFloat(sendmoney.receiverId),
      amount: parseFloat(sendmoney.amount),
    };

    const receivetransaction = {
      transactionType: 'Credited',
      transactionDate: currentTime.toISOString().split('T')[0],
      transactionTime: currentTime.toTimeString().split(' ')[0], 
      senderorReceiverid: sendmoney.receiverId,
      amount:  parseFloat(sendmoney.amount),
    };

  axios.post('http://localhost:8083/api/transaction/sendmoney', sendtransaction, {
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      walletAccountId: walletAccountId,
      walletPin: sendmoney.walletPin
    }
  })
  .then((response) => {
    axios.post('http://localhost:8083/api/transaction/receivemoney', receivetransaction, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        receivingWalletAccountId: sendmoney.receiverId
      }
    })
    .then((response) => {
      alert('Money Transferred!');
      navigate('/transactions');
    })
    .catch((error) => {
      alert(error.message);
    });
  })
  .catch((error) => {
    alert(error.response.data);
    console.log(error);
  });

console.log(parseInt(sendmoney.amount));
console.log(receivetransaction);
console.log(sendtransaction);
 
};

    return(<body className="send-money-body">
        <h2 className="send-money-h2">Send Money</h2>
        <hr></hr>
        <table className='sendmoney-table'>
          <tr>
            <td><img className="send-money-img" src="https://cdn.pixabay.com/animation/2022/09/09/21/19/21-19-47-383_512.gif"></img>
            </td>
         <td>
      <div class="send-money-form">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="receiverId">Receiver ID:</label>
              <input
                type="number"
                id="receiverId"
                value={sendmoney.receiverId}
                name="receiverId"
                onChange={handleChange}
                required
                min="1"
              ></input>
             
            </div>
            <div class="form-group">
              <label for="amount">Amount:</label>
              <input
                type="number"
                name="amount"
                value={sendmoney.amount}
                onChange={handleChange}
                required
                min="100"
                max="10000000"
              ></input>
             
            </div>
            <div class="form-group">
              <label for="walletPin">Wallet PIN:</label>
              <input
                type="password"
                id="walletPin"
                name="walletPin"
                value={sendmoney.walletPin}
                onChange={handleChange}
                required
                minLength={4}
                maxLength={4}
                pattern="^[1-9][0-9]{3,5}$"
              ></input>
              
            </div>
            <div class="form-group">
              <button type="submit">Send Money</button>
            </div>
           
          </form>
          <Link to="/dashboard"><button class="go-back-button"> Go Back</button></Link>
        </div>
      </td>
      </tr>
      </table>
      </body>);
}

export default SendMoney;