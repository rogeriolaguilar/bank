const Person = require('./person')

//rigth port 
class PersonRepository {
  getPerson(cpf) {
    // go to real db

    return new Person({ cpf: '77777777777', name: 'Yukihiro', birthday: new Date('1991-01-27T00:00:00.000Z') })
  }
}
module.exports = PersonRepository