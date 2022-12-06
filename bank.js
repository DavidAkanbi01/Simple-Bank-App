class Bank {
    constructor() {
        this.balance = 0;
        this.transaction = [];
    }
    deposit(name, amount, type){
        const depositTxn = {
            name: name, 
            amount: amount,
            type: 'deposit'
        }
        this.balance += amount;
        this.transaction.push(depositTxn);
    }

    withdrawal(name, amount, type){
        const withdraw = {
            name: name,
            amount: amount,
            type: 'withdraw'
        }
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transaction.push(withdraw);
        } else {
            return alert('Insufficient Funds!!!')
        };
    };
};

const csBank = new Bank();
csBank.deposit('David Akanbi', 16800, 'deposit');
csBank.withdrawal('David Akanbi', 800, 'withdraw');
csBank.deposit('David Akanbi', 16800, 'deposit');
csBank.withdrawal('David Akanbi', 32800, 'withdraw');

console.log(csBank);