import { WalletAccount } from "./walletaccount";

export class TransactionDTO {
    constructor(
   public   transactionType: string,
   public  transactionDate: string,
   public transactionTime: string, 
   public senderorReceiverid: string,
   public amount: string,
    ){}
}