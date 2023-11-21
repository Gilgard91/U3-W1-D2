class SonAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  oneDeposit(amount: number): void {
    this.balance += amount;
  }

  oneWithDraw(amount: number): void {
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

class MotherAccount extends SonAccount {
  addInterest(): void {
    const interest = this.getBalance() * 0.1;
    this.oneDeposit(interest);
  }
}

const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();

sonAccount.oneDeposit(80);
motherAccount.oneDeposit(250);

sonAccount.oneWithDraw(50);
motherAccount.oneWithDraw(100);

motherAccount.addInterest();

console.log("Saldo del conto del figlio:", sonAccount.getBalance());
console.log("Saldo del conto della madre:", motherAccount.getBalance());
