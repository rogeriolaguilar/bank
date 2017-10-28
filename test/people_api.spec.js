//process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

const PEOPLE_URL = '/people'

chai.use(chaiHttp);

describe('People REST API', () => {
  const person = { id: 'dummy-dummy-dummy-dummy', name: 'Ryan', birthday: '1991-01-20' }

  describe('GET person', () => {
    it('should GET the person', (done) => {
      chai.request(server)
        .get(`${PEOPLE_URL}/${person.id}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.id.should.be.eq(person.id)
          res.body.name.should.be.eq(person.name)
          res.body.birthday.should.be.eq(person.birthday)
          done()
        })
    })
  })

  describe('POST person with success', () => {
    it('it should return the person id', (done) => {
      chai.request(server)
        .post(PEOPLE_URL)
        .send({ name: person.name, birthday: person.birthday })
        .end((err, res) => {
          res.should.have.status(201)
          res.body.id.should.be.eq(person.id)
          done()
        })
    });
  });

  describe('PUT person', () => {
    it('it should return the updated person', (done) => {
      const update_body = { name: 'New Ryan', birthday: '1991-01-20' }

      chai.request(server)
        .put(`${PEOPLE_URL}/${person.id}`)
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
        .delete(`${PEOPLE_URL}/${person.id}`)
        .end((err, res) => {
          res.should.have.status(204)
          res.body.should.be.empty
          done()
        })
    })
  })
})