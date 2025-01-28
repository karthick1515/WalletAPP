import { BankAccountDTO } from "./bankaccountdto";
import { TransactionDTO } from "./transactiondto";

export class AddMoneyRequest{
    constructor(
        public bankAccount:BankAccountDTO,
        public transaction:TransactionDTO
    ){}
}