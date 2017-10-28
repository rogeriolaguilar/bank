//process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Accounts REST API', () => {
  const account = { id: 'dummy-dummy-dummy-dummy', status: 'activated', number: 12345, owner_id: "123123" }

  describe('GET accounts of a person', () => {
    it('should GET the accounts', (done) => {
      let peopleId = "234"
      chai.request(server)
        .get(`/people/${peopleId}/accounts`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.id.should.be.eq(account.id)
          res.body.number.should.be.eq(account.number)
          res.body.status.should.be.eq(account.status)
          res.body.ownerId.should.be.eq(peopleId)
          done()
        })
    })
  })

  describe('GET accounts of a company', () => {
    it('should GET the accounts', (done) => {
      let companyId = "234"
      chai.request(server)
        .get(`/companies/${companyId}/accounts`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.id.should.be.eq(account.id)
          res.body.number.should.be.eq(account.number)
          res.body.ownerId.should.be.eq(companyId)
          done()
        })
    })
  })

  describe('POST account for a person with success', () => {
    it('should return the new account id', (done) => {
      chai.request(server)
        .post('/people/123/accounts')
        .send({ number: account.number })
        .end((err, res) => {
          res.should.have.status(201)
          res.body.id.should.be.eq(account.id)
          done()
        })
    });
  });

  describe('POST account for a company with success', () => {
    it('should return the new account id', (done) => {
      chai.request(server)
        .post('/companies/123/accounts')
        .send({ number: account.number })
        .end((err, res) => {
          res.should.have.status(201)
          res.body.id.should.be.eq(account.id)
          done()
        })
    });
  });

  describe('DELETE account with sucess', () => {
    it('should return no-content code', (done) => {
      chai.request(server)
        .delete(`/accounts/123123`)
        .end((err, res) => {
          res.should.have.status(204)
          res.body.should.be.empty
          done()
        })
    })
  })
})