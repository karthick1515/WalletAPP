import { Component } from '@angular/core';
import { TransactionService } from 'src/services/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from 'src/class/transaction';
import { WalletAccount } from 'src/class/walletaccount';
import { NgForm } from '@angular/forms';
import { BankAccountDTO } from 'src/class/bankaccountdto';
import { AddMoneyRequest } from 'src/class/addmoneyrequest';
import { TransactionDTO } from 'src/class/transactiondto';
import { WalletAccountService } from 'src/services/walletaccountservice.service';
@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.css']
})
export class AddmoneyComponent {
  constructor(private transactionService: TransactionService,private walletAccountService: WalletAccountService, private router: Router) {}
  transactions: Transaction[] = [];
  walletAccount = new WalletAccount(
    0,
    '',
    '',
    '',
    '',
    '',
    new Date(),
    '',
    0,
    this.transactions
  );
     
 currentDate = new Date();
 formattedDate = `${this.currentDate.getFullYear()}-${(this.currentDate.getMonth() + 1).toString().padStart(2, '0')}-${this.currentDate.getDate().toString().padStart(2, '0')}`;
 formattedTime = `${this.currentDate.getHours().toString().padStart(2, '0')}:${this.currentDate.getMinutes().toString().padStart(2, '0')}:${this.currentDate.getSeconds().toString().padStart(2, '0')}`;
 
 transaction = new TransactionDTO(
   'BankTransfer',
   this.formattedDate,
   this.formattedTime,
   '',
   ''
 );
 bankAccount = new BankAccountDTO(
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
);

 submitBankAccount(bankAccountForm: NgForm) {
  const walletAccountId = localStorage.getItem('walletAccountId');
  if(this.transaction.senderorReceiverid!=walletAccountId){
    alert("The Wallet ID Should be Your Wallet Account ID");
    return;
  }
    if (bankAccountForm.valid) {
      const addMoneyFromBank = new AddMoneyRequest(
        this.bankAccount,
        this.transaction
      );
      console.log(addMoneyFromBank);
      this.transactionService.addMoneyfromBank(addMoneyFromBank).subscribe(
        (response) => {
          if (response.transactionid!= null) {
            console.log('Transaction Successful:', response);
            alert("Transaction Successful");
            let id=this.transaction.senderorReceiverid;
           this.walletAccountService.findWalletAccountbyID(+id).subscribe(
            (walletaccount)=>{
              localStorage.setItem('loggedInWallet', JSON.stringify(walletaccount));
            })
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          console.log(bankAccountForm);
          alert("Transaction failed : "+error.error);
          console.error('Transaction failed:', error);
        }
      );
    }
    else {
      alert("Please fill in all required fields.");
    }
  }
}

