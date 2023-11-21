var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.balance = initialBalance;
    }
    SonAccount.prototype.oneDeposit = function (amount) {
        this.balance += amount;
    };
    SonAccount.prototype.oneWithDraw = function (amount) {
        this.balance -= amount;
    };
    SonAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        var interest = this.getBalance() * 0.1;
        this.oneDeposit(interest);
    };
    return MotherAccount;
}(SonAccount));
var sonAccount = new SonAccount();
var motherAccount = new MotherAccount();
sonAccount.oneDeposit(80);
motherAccount.oneDeposit(250);
sonAccount.oneWithDraw(50);
motherAccount.oneWithDraw(100);
motherAccount.addInterest();
console.log("Saldo del conto del figlio:", sonAccount.getBalance());
console.log("Saldo del conto della madre:", motherAccount.getBalance());
