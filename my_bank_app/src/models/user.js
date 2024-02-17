class User {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.transactions = [];
    }

    sendMoney(amount, recipient) {
        if (amount <= 0 || amount > this.balance) {
            throw new Error('Invalid amount or insufficient balance');
        }

        this.balance -= amount;
        this.transactions.push({
            type: 'debit',
            amount: amount,
            timestamp: new Date(),
            description: `Sent ${amount} to ${recipient.name}`,
        });

        recipient.receiveMoney(amount, this);

        return `Successfully sent ${amount} to ${recipient.name}`;
    }

    receiveMoney(amount, sender) {
        this.balance += amount;
        this.transactions.push({
            type: 'credit',
            amount: amount,
            timestamp: new Date(),
            description: `Received ${amount} from ${sender.name}`,
        });
    }

    getBalance() {
        return this.balance;
    }

    getTransactionHistory() {
        return this.transactions;
    }
}

module.exports = User;
