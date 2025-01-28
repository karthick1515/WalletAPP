import { Transaction } from "./transaction";

export class WalletAccount {
    constructor(
        public id: number,
        public fullName: string,
        public emailAddress: string,
        public password: string,
        public walletPin: string,
        public phoneNumber: string,
        public dateOfBirth: Date,
        public address: string,
        public balance: number,
        public transactions: Transaction[]
  ){}
}