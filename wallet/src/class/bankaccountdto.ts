export class BankAccountDTO {
    constructor(
      public accountHolderName: string,
      public mobileNumber: string,
      public accountType: string,
      public accountNumber: string,
      public ifsccode: string,
      public atmCardNumber: string,
      public bankName: string,
      public atmPin: string
    ) {}
  }