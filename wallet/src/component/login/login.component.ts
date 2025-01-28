import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/class/login';
import { WalletAccountService } from 'src/services/walletaccountservice.service';
import { Router } from '@angular/router';
import 'bootstrap/dist/js/bootstrap.bundle';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(private walletAccountService: WalletAccountService, private router: Router) {}

  login: Login = {
    email: '',
    password: ''
  };
  
  submitLogin(loginForm: NgForm) {
    
    if (loginForm.valid) {
      this.walletAccountService.loginWalletAccount(this.login).subscribe(
        (response) => {
          if (response.id != null) {
          
            localStorage.setItem('loggedInWallet', JSON.stringify(response));
            localStorage.setItem('walletAccountId', JSON.stringify(response.id));
            console.log('Logged in:', response);
            this.router.navigate(['/dashboard']);
          }
        },
        (error) => {
          alert("LogIn failed : "+error.error);
          console.error('Login error:', error);
        }
      );
    }
    else {
      alert("Please fill in all required fields.");
    }
  }
}

