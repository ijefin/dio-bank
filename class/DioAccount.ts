export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  deposit = (amount: number): void => {
    this.balance += amount;
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.validateWithdrawAmount(amount)) {
      const withdrawn = (this.balance -= amount);
      console.log(`Você sacou ${amount}. Saldo atual: ${withdrawn}`);
    }
  };

  getBalance = () => {
    return console.log(this.balance);
  };

  //get to only get value, setter to change property value.
  setBalance = (value: number): void => {
    this.balance += value;
  };

  private validateWithdrawAmount = (amout: number): boolean => {
    if (this.balance >= amout && this.balance > 0) {
      return true;
    }
    throw new Error(`Valor inválido! Verifique seu saldo.`);
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Sua conta está inativa! Entre em contato com o banco");
  };
}
