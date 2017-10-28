''//process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Person', () => {
  describe('/GET one', () => {
    it('it should GET the person', (done) => {
      chai.request(server)
        .get('/persons/1')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.id.should.be.eq('1')
          
          done()
        })
    })
  })
})