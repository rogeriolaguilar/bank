//process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

const PEOPLE_URL = '/people'

chai.use(chaiHttp);

describe('People REST API', () => {
  const person = { cpf: "77777777777", name: 'Yukihiro', birthday: '1991-01-27T00:00:00.000Z' }

  describe('GET person', () => {
    it('should GET the person', (done) => {
      chai.request(server)
        .get(`${PEOPLE_URL}/${person.cpf}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.cpf.should.be.eq(person.cpf)
          res.body.name.should.be.eq(person.name)
          res.body.birthday.should.be.eq(person.birthday)
          done()
        })
    })
  })

  describe('POST person with success', () => {
    it('it should return the person cpf', (done) => {
      chai.request(server)
        .post(PEOPLE_URL)
        .send({ cpf: person.cpf, name: person.name, birthday: person.birthday })
        .end((err, res) => {
          res.should.have.status(201)
          res.body.cpf.should.be.eq(person.cpf)
          done()
        })
    });
  });

  describe('PUT person', () => {
    it('it should return the updated person', (done) => {
      const update_body = { name: 'New Ryan', birthday: '1991-01-20' }

      chai.request(server)
        .put(`${PEOPLE_URL}/${person.cpf}`)
        .send(update_body)
        .end((err, res) => {
          res.should.have.status(204)
          res.body.should.be.empty
          done()
        })
    })
  })

  describe('DELETE person', () => {
    it('should return success with 204 code', (done) => {
      chai.request(server)
        .delete(`${PEOPLE_URL}/${person.cpf}`)
        .end((err, res) => {
          res.should.have.status(204)
          res.body.should.be.empty
          done()
        })
    })
  })
})