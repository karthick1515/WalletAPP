import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/class/login';
import { WalletAccount } from 'src/class/walletaccount';

@Injectable({
    providedIn: 'root'
  })

  export class WalletAccountService {
    constructor(private httpClient: HttpClient,
        private router : Router){ }

    private baseUrl = "http://localhost:8082";
       addwalletAccount(walletAccount:WalletAccount):Observable<WalletAccount>{
       return this.httpClient.post<WalletAccount>(this.baseUrl+'/api/walletaccount/create',walletAccount);
       }

       forgotPassword(email: string, walletid: number, newpassword: string): Observable<WalletAccount> {
        const url = `${this.baseUrl}/api/walletaccount/resetpassword?email=${email}&walletid=${walletid}&newpassword=${newpassword}`;
      
        return this.httpClient.post<WalletAccount>(url,null);
      }
      
      loginWalletAccount(logindata:Login): Observable<WalletAccount> {
           
        return this.httpClient.post<WalletAccount>(
          this.baseUrl + '/api/walletaccount/login',logindata
       
        );
      }

      findWalletAccountbyID(id: number): Observable<WalletAccount> {
        return this.httpClient.get<WalletAccount>(
          this.baseUrl + `/api/walletaccount/get?id=${id}`
        );
      }
           
}