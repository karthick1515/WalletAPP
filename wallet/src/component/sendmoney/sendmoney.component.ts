import { Component } from '@angular/core';
import { WalletAccount } from 'src/class/walletaccount';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TransactionService } from 'src/services/transaction.service';
import { TransactionDTO } from 'src/class/transactiondto';
import { WalletAccountService } from 'src/services/walletaccountservice.service';

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.css']
})
export class SendmoneyComponent {

  currentDate = new Date();
 formattedDate = `${this.currentDate.getFullYear()}-${(this.currentDate.getMonth() + 1).toString().padStart(2, '0')}-${this.currentDate.getDate().toString().padStart(2, '0')}`;
 formattedTime = `${this.currentDate.getHours().toString().padStart(2, '0')}:${this.currentDate.getMinutes().toString().padStart(2, '0')}:${this.currentDate.getSeconds().toString().padStart(2, '0')}`;
 walletPin :string='';
 
 sendtransaction = new TransactionDTO(
    'Debited',
    this.formattedDate,
    this.formattedTime,
    '',
    ''
  );
  receivetransaction = new TransactionDTO(
    'Credited',
    this.formattedDate,
    this.formattedTime,
    '',
    ''
  );
  constructor(private transactionService: TransactionService,private walletAccountService: WalletAccountService, private router: Router) {}

  sendMoney(sendMoneyForm: NgForm) {
    if (sendMoneyForm.valid) {
     
      const walletAccountId = localStorage.getItem('walletAccountId');
      if (walletAccountId !== null) {

        const receivetransaction = new TransactionDTO(
          'Credited',
          this.formattedDate,
          this.formattedTime,
          walletAccountId,
          this.sendtransaction.amount
        );
        this.transactionService.sendmoney(this.sendtransaction, +walletAccountId, this.walletPin).subscribe(
          (response) => {
            if (response.transactionid != null) {
              console.log('Money Sent', response);
              this.transactionService.receivemoney(receivetransaction,+this.sendtransaction.senderorReceiverid).subscribe((
                transaction)=>{
                  this.walletAccountService.findWalletAccountbyID(+walletAccountId).subscribe(
                    (walletaccount)=>{
                      localStorage.setItem('loggedInWallet', JSON.stringify(walletaccount));
                    })  
                    alert("Money Transfered");
                  this.router.navigate(['/dashboard']);
                });
             
            }
          },
          (error) => {
            alert("Transaction Failed : "+error.error);
            console.error('Transaction failed :', error);
          }
        );
      } else {
        console.error("'walletAccountId' is null.");
      }
    }
    else {
      alert("Please fill in all required fields.");
    }
  }
}