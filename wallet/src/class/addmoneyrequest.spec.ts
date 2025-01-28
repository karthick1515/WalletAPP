import { AddMoneyRequest } from "./addmoneyrequest";
import { BankAccountDTO } from "./bankaccountdto"; 
import { Transaction } from "./transaction";
import { TransactionDTO } from "./transactiondto";
import { WalletAccount } from "./walletaccount";

describe('Addmoneyrequest', () => {
  it('should create an instance', () => {
    const bankAccountDTO = new BankAccountDTO(
      'John Doe',
      '1234567890',
      'Savings',
      '123456789012',
      'ABCD123456',
      '1234 5678 9012 3456',
      'Example Bank',
     ' 1234'
    );
  
    const transaction = new TransactionDTO(
      'Credit',
      '2023-08-30', 
      '15:30:00', 
     '12345',
     ' 100.50'
    );
    
    const addMoneyFromBank = new AddMoneyRequest(
      bankAccountDTO,
      transaction
    );

    expect(addMoneyFromBank).toBeTruthy();
    expect(addMoneyFromBank.bankAccount).toEqual(bankAccountDTO);
    expect(addMoneyFromBank.transaction).toEqual(transaction);
  });
});
