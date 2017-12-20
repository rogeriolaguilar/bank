const sinon = require('sinon')

const Account = require("../../account/domain/account");
const DepositEvent = require("../domain/deposit_event");
const Transaction = require('../../transaction/domain/transaction');

describe('DepositEvent', () => {

  const account = new Account({ number: 123, balance: 0 });
  const transaction = new Transaction({}, '');
  let depositEvent = null;
  let accountMock = null;
  let transactionMock = null;


  beforeEach(() => {
    depositEvent = new DepositEvent(transaction, account)
    accountMock = sinon.mock(account)
    transactionMock = sinon.mock(transaction)
  });

  describe('#process', () => {

    it('should call account and transaction to process the deposit', (done) => {
      accountMock.expects('handleDeposit').withArgs(depositEvent).returns(Promise.resolve());
      transactionMock.expects('handleCreation').withArgs(depositEvent).returns(Promise.resolve());

      let result = depositEvent.process()

      result
        .then(() => {
          transactionMock.verify();
          accountMock.verify();
          done()
        })
        .catch(done)
    });
  });

  describe('#reverse', () => {

    it('should call account and transaction to reverse the deposit', (done) => {
      accountMock.expects('reverseDeposit').withArgs(depositEvent).returns(Promise.resolve());
      transactionMock.expects('reverseCreation').returns(Promise.resolve());

      let result = depositEvent.reverse()

      result
        .then(() => {
          transactionMock.verify();
          accountMock.verify();
          done()
        })
        .catch(done)
    });
  });
});