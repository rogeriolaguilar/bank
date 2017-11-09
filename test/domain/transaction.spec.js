let expect = require('chai').expect
Transaction = require("../../domain/transaction/transaction");

describe('Transaction', () => {
  describe('#isValid', () => {
    it('when amount is zero', () => {
      expect(new Transaction(0).isValid()).to.be.eq(false)
    });

    it('amount is not a number', () => {
      expect(new Transaction('100').isValid()).to.be.eq(false)
    });

    it('amount is not a integer', () => {
      expect(new Transaction(10.5).isValid()).to.be.eq(false)
    });

    it('amount is positive', () => {
      expect(new Transaction(10).isValid()).to.be.eq(true)
    });

    it('amount is negative', () => {
      expect(new Transaction(-10).isValid()).to.be.eq(true)
    });
  });

  describe('#isDeposit', () => {
    it('is true when amount is greater than 0', () => {
      expect(new Transaction(1000).isDeposit()).to.be.eq(true);
    });

    it('is false when amount is less than 0', () => {
      expect(new Transaction(-1000).isDeposit()).to.be.eq(false);
    });

    it('is false when amount is 0', () => {
      expect(new Transaction(0).isDeposit()).to.be.eq(false);
    });
  });

  describe('#isWithdraw', () => {
    it('is false when amount is greater than 0', () => {
      expect(new Transaction(1000).isWithdraw()).to.be.eq(false);
    });

    it('is true when amount is less than 0', () => {
      expect(new Transaction(-1000).isWithdraw()).to.be.eq(true);
    });

    it('is false when amount is 0', () => {
      expect(new Transaction(0).isWithdraw()).to.be.eq(false);
    });
  });
});

