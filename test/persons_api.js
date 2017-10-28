//process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Person', () => {
  let person = { id: 'dummy-dummy-dummy-dummy', name: 'Ryan', birthday: '1991-01-20' }

  describe('GET person', () => {
    it('should GET the person', (done) => {
      chai.request(server)
        .get(`/persons/${person.id}`)
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
        .post('/persons')
        .send({ name: person.name, birthday: person.birthday })
        .end((err, res) => {
          res.should.have.status(201)
          res.body.id.should.be.eq(person.id)
        })
      done()
    });
  });

  describe('PUT person', () => {
    it('it should return the updated person', (done) => {
      let update_body = { name: 'New Ryan', birthday: '1991-01-20' }

      chai.request(server)
        .put(`/persons/${person.id}`)
        .send(update_body)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.include(update_body)
          done()
        })
    })
  })

  describe('DELETE person', () => {
    it('should return success with 204 code', (done) => {
      chai.request(server)
        .delete(`/persons/${person.id}`)
        .end((err, res) => {
          res.should.have.status(204)
          res.body.should.be.empty
          done()
        })
    })
  })
})