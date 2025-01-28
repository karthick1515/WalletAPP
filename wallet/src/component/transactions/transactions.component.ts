import { Component } from '@angular/core';
import { Transaction } from 'src/class/transaction';
import { TransactionService } from 'src/services/transaction.service';
import 'bootstrap/dist/js/bootstrap.bundle';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    const walletAccountId = localStorage.getItem('walletAccountId');
    if (walletAccountId) {
      this.transactionService.findTransactionByWalletAccountbyID(+walletAccountId)
        .subscribe(
          (transactions) => {
            this.transactions = transactions;
            
            console.log(transactions);
          },
          (error) => {
            alert('Cant retrive Transactions : '+error.error);
            console.error('Error retrieving transactions:', error);
          }
        );
    }
  }
}
