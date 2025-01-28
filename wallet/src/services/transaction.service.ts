import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddMoneyRequest } from 'src/class/addmoneyrequest';
import { Login } from 'src/class/login';
import { Transaction } from 'src/class/transaction';
import { TransactionDTO } from 'src/class/transactiondto';
import { WalletAccount } from 'src/class/walletaccount';

@Injectable({
    providedIn: 'root'
  })

  export class TransactionService {
    constructor(private httpClient: HttpClient,
        private router : Router){ }

    private baseUrl = "http://localhost:8083";
       addMoneyfromBank(addmoneyrequest:AddMoneyRequest):Observable<Transaction>{
       return this.httpClient.post<Transaction>(this.baseUrl+'/api/transaction/addmoneyfrombank',addmoneyrequest);
       }

       sendmoney(transaction:TransactionDTO,walletAccountId:number,walletPin:string): Observable<Transaction> {
        const url = `${this.baseUrl}/api/transaction/sendmoney?walletAccountId=${walletAccountId}&walletPin=${walletPin}`;
      
        return this.httpClient.post<Transaction>(url,transaction);
      }
      
      receivemoney(transaction:TransactionDTO,receivingWalletAccountId:number):Observable<Transaction> {
        const url = `${this.baseUrl}/api/transaction/receivemoney?receivingWalletAccountId=${receivingWalletAccountId}`;
        return this.httpClient.post<Transaction>(url,transaction);
      }

  findTransactionByWalletAccountbyID(walletAccountId: number): Observable<Transaction[]> {
    const url = `${this.baseUrl}/api/transaction/getalltransactions?walletAccountId=${walletAccountId}`;
      
    return this.httpClient.get<Transaction[]>(url);
  }
           
}