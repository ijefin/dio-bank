import { DioAccount } from "./DioAccount";

export class BonusAcount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (amount: number): void => {
    this.setBalance(amount + 10);
  };
}
