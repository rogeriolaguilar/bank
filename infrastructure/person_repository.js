const knex = require("knex")(require("../knexfile")[process.env.NODE_ENV])
const Person = require('../domain/person/person')

//rigth port 
class PersonRepository {
  getPerson(cpf) {
    // go to real db

    return new Person({ cpf: cpf, name: 'Yukihiro', birthday: new Date('1991-01-27T00:00:00.000Z') })
  }

  save(person){
    return knex('people').insert({ 
      name: person.name,
      cpf: person.cpf, 
      birthday: person.birthday 
    })
  }
}
module.exports = PersonRepository

