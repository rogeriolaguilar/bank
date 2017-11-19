const expect = require('chai').expect
const Person = require("../domain/person")

describe('Person', () => {
  let person

  beforeEach(() => {
    person = new Person({ cpf: '71046356372', name: 'Linus Torvalds', birthday: new Date('1969-12-28') })
  });

});
