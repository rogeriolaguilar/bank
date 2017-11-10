const Person = require('./person')

//rigth port 
class PersonRepository {
  getPerson(cpf) {
    // go to real db
    return new Person('Yukihiro', new Date('1991-01-27T00:00:00.000Z'))
  }
}
module.exports = PersonRepository