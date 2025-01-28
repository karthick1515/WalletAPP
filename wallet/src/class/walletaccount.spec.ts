import { WalletAccount } from "./walletaccount"; 
import { Transaction } from "./transaction"; 

describe('WalletAccount', () => {
  it('should create an instance', () => {
    
    const transactions: Transaction[] = [];
    const walletAccount = new WalletAccount(
      1,
      'John Doe',
      'john@example.com',
      'password123',
      '1234',
      '1234567890',
      new Date('1990-01-01'),
      '123 Main St',
      1000.0,
      transactions
    );

    expect(walletAccount).toBeTruthy();
    expect(walletAccount.id).toBe(1);
    expect(walletAccount.fullName).toBe('John Doe');
   
  });
});
