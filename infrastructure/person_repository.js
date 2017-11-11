const Person = require('../domain/person/person')

//rigth port 
class PersonRepository {
  getPerson(cpf) {
    // go to real db

    return new Person({ cpf: cpf, name: 'Yukihiro', birthday: new Date('1991-01-27T00:00:00.000Z') })
  }

  save(person){
    return person
  }
}
module.exports = PersonRepository