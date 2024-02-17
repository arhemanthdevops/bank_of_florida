const chai = require('chai');
const assert = chai.assert;
const User = require('../src/models/user');

describe('User receiveMoney', () => {
    it('should receive money from another user and update balances and transaction history', () => {
        // Arrange
        const sender = new User('Sender', 1000);
        const recipient = new User('Recipient', 500);

        // Act
        sender.sendMoney(200, recipient);

        // Assert
        assert.strictEqual(sender.getBalance(), 800, 'Sender balance should be updated');
        assert.strictEqual(recipient.getBalance(), 700, 'Recipient balance should be updated');

        // Receive money
        const result = recipient.receiveMoney(100, sender);

        // Assert
        assert.strictEqual(recipient.getBalance(), 800, 'Recipient balance should be updated');
        assert.strictEqual(sender.getBalance(), 700, 'Sender balance should be updated');
        assert.isArray(recipient.getTransactionHistory(), 'Recipient transaction history should be an array');
        assert.strictEqual(recipient.getTransactionHistory().length, 2, 'Recipient should have two transactions in history');
        assert.strictEqual(result, undefined, 'Receive money should not return anything');
    });
});
