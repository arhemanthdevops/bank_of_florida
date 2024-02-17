#### "npm install --save-dev mocha chai"  ##### run this command for clearing dependencies  #####

const chai = require('chai');
const assert = chai.assert;
const User = require('../src/models/user');

describe('User sendMoney', () => {
    it('should send money to another user and update balances and transaction history', () => {
        // Arrange
        const sender = new User('Sender', 1000);
        const recipient = new User('Recipient', 500);

        // Act
        const result = sender.sendMoney(200, recipient);

        // Assert
        assert.strictEqual(sender.getBalance(), 800, 'Sender balance should be updated');
        assert.strictEqual(recipient.getBalance(), 700, 'Recipient balance should be updated');
        assert.isArray(sender.getTransactionHistory(), 'Sender transaction history should be an array');
        assert.isArray(recipient.getTransactionHistory(), 'Recipient transaction history should be an array');
        assert.strictEqual(sender.getTransactionHistory().length, 1, 'Sender should have one transaction in history');
        assert.strictEqual(recipient.getTransactionHistory().length, 1, 'Recipient should have one transaction in history');
        assert.strictEqual(result, 'Successfully sent 200 to Recipient', 'Should return success message');
    });

    it('should throw an error for invalid amount or insufficient balance', () => {
        // Arrange
        const sender = new User('Sender', 100);

        // Act & Assert
        assert.throws(() => sender.sendMoney(-50, new User('Recipient', 0)), 'Invalid amount or insufficient balance');
        assert.throws(() => sender.sendMoney(150, new User('Recipient', 0)), 'Invalid amount or insufficient balance');
    });
});

