const chai = require('chai');
const assert = chai.assert;
const User = require('../src/models/user');

describe('User', () => {
    it('should initialize with the correct name and balance', () => {
        // Arrange & Act
        const user = new User('John', 500);

        // Assert
        assert.strictEqual(user.name, 'John', 'User should have the correct name');
        assert.strictEqual(user.balance, 500, 'User should have the correct balance');
        assert.isArray(user.getTransactionHistory(), 'User transaction history should be an array');
        assert.strictEqual(user.getTransactionHistory().length, 0, 'User should have an empty transaction history');
    });

    it('should throw an error for invalid amount when sending money', () => {
        // Arrange
        const user = new User('John', 500);

        // Act & Assert
        assert.throws(() => user.sendMoney(-50, new User('Recipient', 0)), 'Invalid amount or insufficient balance');
    });

    it('should throw an error for insufficient balance when sending money', () => {
        // Arrange
        const user = new User('John', 50);

        // Act & Assert
        assert.throws(() => user.sendMoney(100, new User('Recipient', 0)), 'Invalid amount or insufficient balance');
    });
});
