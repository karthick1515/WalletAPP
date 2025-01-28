import { Component } from '@angular/core';
import { WalletAccount } from 'src/class/walletaccount';
import { WalletAccountService } from 'src/services/walletaccountservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  
  wallet: WalletAccount = {
    id: 0,
    fullName: '',
    emailAddress: '',
    password: '',
    walletPin: '',
    phoneNumber: '',
    dateOfBirth: new Date(), 
    address:'',
    balance: 0,
    transactions: []
  };

  constructor(private walletAccountService: WalletAccountService, private router: Router) {
  }
  

  submitForm(walletForm: NgForm) {
    if (walletForm.valid) {
      const inputDate = new Date(this.wallet.dateOfBirth);
      const currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() - 18);
  
      if (inputDate > currentDate) {
        alert('Check the date of birth,your not eligible to use this Wallet Application if your age is less than 18');
        return; 
      }
     
      this.walletAccountService.addwalletAccount(this.wallet).subscribe(
        (response) => {
          console.log('Account created', response);
          this.wallet = response;
          alert('Account created');
          this.router.navigate(['/login']);
        },
        (error) => {
          alert(error.error);
          console.error('Error creating account:', error.error);
        }
      );
    }
    else {
      alert("Please fill in all required fields.");
    }
  }
  
}
