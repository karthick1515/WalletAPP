import { BankAccountDTO } from "./bankaccountdto"; 

describe('BankAccountDTO', () => {
  it('should create an instance', () => {
    const bankAccountDTO = new BankAccountDTO(
      'John Doe',
      '1234567890',
      'Savings',
      '123456789012',
      'ABCD123456',
      '1234 5678 9012 3456',
      'Example Bank',
      '1234'
    );

    expect(bankAccountDTO).toBeTruthy();
    expect(bankAccountDTO.accountHolderName).toBe('John Doe');
    expect(bankAccountDTO.mobileNumber).toBe('1234567890');
    expect(bankAccountDTO.accountType).toBe('Savings');

  });
});
