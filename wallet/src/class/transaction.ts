import { WalletAccount } from "./walletaccount";

export class Transaction {
    constructor(
   public transactionid: number,
   public   transactionType: string,
   public  transactionDate: string,
   public transactionTime: string,
   public senderorReceiverid: string,
   public amount: string,
   public walletAccount: WalletAccount
    ){}
}