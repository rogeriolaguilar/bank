//process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../../server');
chai.should()
chai.use(chaiHttp);

describe('Companies REST API', () => {
  const company = { id: 'dummy-dummy-dummy-dummy', name: "Google Brasil", cnpj: '06.990.590/0001-23'
 }

  describe('GET company', () => {
    it('should GET the company', (done) => {
      chai.request(server)
        .get(`/companies/${company.id}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.id.should.be.eq(company.id)
          res.body.name.should.be.eq(company.name)
          res.body.cnpj.should.be.eq(company.cnpj)
          done()
        })
    })
  })

  describe('POST company with success', () => {
    it('it should return the company id', (done) => {
      chai.request(server)
        .post('/companies')
        .send({ name: company.name, cnpj: company.cnpj })
        .end((err, res) => {
          res.should.have.status(201)
          res.body.id.should.be.eq(company.id)
          done()
        })
    });
  });

  describe('PUT company', () => {
    it('it should return the updated company', (done) => {
      const update_body = { name: 'New Ryan', cnpj: '1991-01-20' }

      chai.request(server)
        .put(`/companies/${company.id}`)
        .send(update_body)
        .end((err, res) => {
          res.should.have.status(204)
          res.body.should.be.empty
          done()
        })
    })
  })

  describe('DELETE company', () => {
    it('should return success with 204 code', (done) => {
      chai.request(server)
        .delete(`/companies/${company.id}`)
        .end((err, res) => {
          res.should.have.status(204)
          res.body.should.be.empty
          done()
        })
    })
  })
})