//process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

const TRANSACTION_TYPES = ['deposit', 'withdraw']

describe('Transactions REST API', () => {
  const transaction = { id: 'dummy-dummy-dummy-dummy', type: "deposit", amount: 1000 }

  describe('GET transaction', () => {
    it('should GET the transaction', (done) => {
      chai.request(server)
        .get(`/transactions/${transaction.id}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.id.should.be.eq(transaction.id)
          res.body.type.should.be.eq(transaction.type)
          res.body.amount.should.be.eq(transaction.amount)
          done()
        })
    })
  })

  describe('POST transaction with success', () => {
    it('it should return the transaction id', (done) => {
      chai.request(server)
        .post('/transactions')
        .send({ type: transaction.type, amount: transaction.amount })
        .end((err, res) => {
          res.should.have.status(201)
          res.body.id.should.be.eq(transaction.id)
          done()
        })
    });
  });
})