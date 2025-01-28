import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WalletAccountService } from 'src/services/walletaccountservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private walletAccountService: WalletAccountService,private router: Router) {}
 email:string ='';
 walletaccountid:string='';
newpassword:string='';
confirmpassword:string='';

  resetpassword(resetForm: NgForm) {
    
    if (resetForm.valid) {
     
      this.walletAccountService.forgotPassword(this.email,+this.walletaccountid,this.newpassword).subscribe(
        (response) => {
          if(response.id!=null){
          alert("Password reseted")
          this.router.navigate(['/login']);
          console.log('Password reseted:',response);}
        },
        (error) => {
          alert(error.error);
          console.error('Password reseted', error);
        }
      );
    }
    else {
      alert("Please fill in all required fields.");
    }
  }
}
