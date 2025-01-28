import { Component } from '@angular/core';
import { WalletAccount } from 'src/class/walletaccount';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  loggedInWallet: WalletAccount | null = null;

  constructor() {}

  ngOnInit(): void {
    // Retrieve wallet account details from localStorage
    const storedWallet = localStorage.getItem('loggedInWallet');
    if (storedWallet) {
      this.loggedInWallet = JSON.parse(storedWallet);
    }
  }
}
