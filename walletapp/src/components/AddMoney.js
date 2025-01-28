import { Link, useNavigate } from "react-router-dom";
import "./addmoney.css";
import { useState } from "react";
import axios from "axios";

const AddMoney = () => {
  const [bankaccount, setBankaccount] = useState({
    accountHolderName: '',
    mobileNumber: '',
    accountType: '',
    accountNumber: '',
    ifsccode: '',
    atmCardNumber: '',
    bankName: '',
    atmPin: ''
  });

  const id = localStorage.getItem('id');
  const currentTime = new Date();
  const navigate = useNavigate();
  const [amount, setAmount] = useState();

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setBankaccount({
      ...bankaccount,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      transactionType: 'Credited',
      transactionDate: currentTime.toISOString().split('T')[0],
      transactionTime: currentTime.toTimeString().split(' ')[0],
      senderorReceiverid: id,
      amount: amount,
    };
    const bankAccount = bankaccount;
    const addMoneyRequest = { bankAccount, transaction };

    axios.post('http://localhost:8083/api/transaction/addmoneyfrombank', addMoneyRequest)
      .then((response) => {
        alert("Money added from Bank Account to Wallet!");
        navigate('/profile');
      }).catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  }

  return (
    <body className="addmoney-body">
      <h2 className="addmoney-h2">Add Money From Bank Account</h2>
      <hr></hr>
      <br></br><br></br>
      <div className="addmoney-form">
        <Link to="/dashboard"><button className="go-back-button"> Go Back</button></Link>
        <form onSubmit={handleSubmit} className="form-group">
          <div>
            <label htmlFor="accountHolderName">Account Holder's Name:</label>
            <input type="text" id="accountHolderName" name="accountHolderName" value={bankaccount.accountHolderName} onChange={handleChange}
              required pattern="^[A-Za-z ]+$" title="Account holder's name should only contain letters and spaces."></input>
          </div>

          <div>
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input type="text" id="mobileNumber" name="mobileNumber" value={bankaccount.mobileNumber} onChange={handleChange} required
              pattern="^\d{10}$" title="Mobile number should be exactly 10 digits." minLength={10} maxLength={10}></input>
          </div>

          <div>
            <label htmlFor="accountType">Account Type:</label>
            <select id="accountType" name="accountType" value={bankaccount.accountType} onChange={handleChange} required>
              <option value="">Select Account Type</option>
              <option value="Savings">Savings</option>
              <option value="Salary">Salary</option>
              <option value="Joint">Joint</option>
            </select>
          </div>

          <div>
            <label htmlFor="accountNumber">Account Number:</label>
            <input type="text" id="accountNumber" name="accountNumber" value={bankaccount.accountNumber} onChange={handleChange} required
              pattern="^\d{12}$" title="Account number should be exactly 12 digits." minLength={12} maxLength={12}></input>
          </div>

          <div>
            <label htmlFor="ifsccode">IFSC Code:</label>
            <input type="text" id="ifsccode" name="ifsccode" value={bankaccount.ifsccode} onChange={handleChange} required
              pattern="^[A-Za-z]{3}[0-9]{7}$" title="IFSC code should be 3 letters followed by 7 digits." minLength={10} maxLength={10}></input>
          </div>

          <div>
            <label htmlFor="atmCardNumber">ATM Card Number:</label>
            <input type="text" id="atmCardNumber" name="atmCardNumber" value={bankaccount.atmCardNumber} onChange={handleChange} required
              pattern="^\d{16}$" title="ATM card number should be exactly 16 digits." minLength={16} maxLength={16}></input>
          </div>

          <div>
            <label htmlFor="bankName">Bank Name:</label>
            <select id="bankName" name="bankName" value={bankaccount.bankName} onChange={handleChange} required>
              <option value="">Select a Bank</option>
              <option value="HDFC Bank">HDFC Bank</option>
              <option value="Indian Bank">Indian Bank</option>
              <option value="South Indian Bank">South Indian Bank</option>
              <option value="ICICI Bank">ICICI Bank</option>
            </select>
          </div>

          <div>
            <label htmlFor="atmPin">ATM PIN:</label>
            <input type="password" id="atmPin" name="atmPin" value={bankaccount.atmPin} onChange={handleChange} required
              pattern="^\d{4}$" title="ATM PIN should be exactly 4 digits." minLength={4} maxLength={4}></input>
          </div>

          <div>
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" value={amount} onChange={handleAmountChange} required
              min="100" max="10000000" title="Amount should be between 100 and 10000000."></input>
          </div>
          <button className="addmoney-button" type="submit">Submit</button>
        </form>
      </div>
    </body>
  );
}

export default AddMoney;