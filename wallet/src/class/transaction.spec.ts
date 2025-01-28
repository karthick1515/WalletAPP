import { Transaction } from './transaction';
import { WalletAccount } from './walletaccount';

describe('Transaction', () => {
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
    const transaction = new Transaction(
      1,
      'Credit',
      '2023-08-30', 
      '15:30:00', 
      '12345',
      '100.50',
      walletAccount
    );

    expect(transaction).toBeTruthy();
    expect(transaction.transactionid).toBe(1);
    expect(transaction.transactionType).toBe('Credit');
    
  });
});
