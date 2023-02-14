import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const contaJefferson: PeopleAccount = new PeopleAccount(1, "Nath", 10);
contaJefferson.deposit(200);
contaJefferson.getBalance();
contaJefferson.withdraw(150);
contaJefferson.withdraw(50);

const contaJtech: CompanyAccount = new CompanyAccount("Jtech", 79437);
console.log(contaJtech);

contaJtech.getLoan(5000);
contaJtech.getLoan(5000);
contaJtech.getLoan(5000);
contaJtech.getLoan(5000);
contaJtech.getBalance();
contaJtech.getLoan(5000);
contaJtech.getBalance();

contaJtech.withdraw(20000)
contaJtech.deposit(1000000)
contaJtech.getBalance();
