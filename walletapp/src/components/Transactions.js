import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./transaction.css";
const Transactions=()=>{

  const [transactions,setTransactions]=useState([]);
  const walletAccountId=localStorage.getItem('id');
  useEffect(()=>{
        axios.get("http://localhost:8083/api/transaction/getalltransactions",{params:{
          walletAccountId:walletAccountId
        }}).
        then((response)=>{
          setTransactions(response.data);
        })
      .catch((error)=>{
        alert(error.response.data);
      })
    

  },[])
    return(<body className="transaction-body">
        <h2 className="transaction-h2">Transaction Details</h2>
        <hr></hr>
        <Link to="/dashboard"><button class="go-back-button"> Go Back</button></Link>
        <br/>        <br/>

        <div class="transaction-details">
            <table >
              <thead>

                <tr>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Sender/Receiver ID</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {
                  transactions.map((transaction)=>(
<tr key={transaction.transactionid }>
                  <td>{ transaction.transactionid }</td>
            <td>{ transaction.transactionType }</td>
            <td>{ transaction.transactionDate }</td>
            <td>{ transaction.transactionTime }</td>
            <td>{ transaction.senderorReceiverid }</td>
            <td>{ transaction.amount }</td>
                  </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </body>)
}
export default Transactions;