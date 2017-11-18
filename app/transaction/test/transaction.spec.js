const expect = require('chai').expect
const Transaction = require("../domain/transaction");

describe('Transaction', () => {
  describe('#isValid', () => {
    it('when amount is zero', () => {
      expect(new Transaction({ amount: 0, type: 'deposit' }).isValid()).to.be.false
    });

    it('amount is not a number', () => {
      expect(new Transaction({ amount: '100', type: 'deposit' }).isValid()).to.be.false
    });

    it('amount is not a integer', () => {
      expect(new Transaction({ amount: 10.5, type: 'deposit' }).isValid()).to.be.false
    });

    it('deposit amount is positive', () => {
      expect(new Transaction({ amount: 1000, type: 'deposit' }).isValid()).to.be.true
    });

    it('withdraw amount is positive', () => {
      expect(new Transaction({ amount: 1000, type: 'withdraw' }).isValid()).to.be.true
    });

    it('when deposit amount is negative', () => {
      expect(new Transaction({ amount: -1000, type: 'deposit' }).isValid()).to.be.false
    });

    it('when withdraw amount is negative', () => {
      expect(new Transaction({ amount: -1000, type: 'deposit' }).isValid()).to.be.false
    });

    it('when type is nil', () => {
      expect(new Transaction({ amount: 1000 }).isValid()).to.be.false
    });

    it('when type is invalid', () => {
      expect(new Transaction({ amount: 1000, type: 'aaa' }).isValid()).to.be.false
    });
  });

  describe('#isDeposit', () => {
    it('is deposit', () => {
      expect(new Transaction({ type: 'deposit' }).isDeposit()).to.be.true;
    });

    it('is withdraw', () => {
      expect(new Transaction({ type: 'withdraw' }).isDeposit()).to.be.false;
    });
  });

  describe('#isWithdraw', () => {
    it('is withdraw', () => {
      expect(new Transaction({ type: 'withdraw' }).isWithdraw()).to.be.true;
    });

    it('is deposit', () => {
      expect(new Transaction({ type: 'deposit' }).isWithdraw()).to.be.false;
    });
  });
});

