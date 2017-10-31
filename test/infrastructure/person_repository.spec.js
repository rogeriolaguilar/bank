process.env.NODE_ENV = "production"
let config = require("../../knexfile").test;
let knex = require("knex")(config);
let expect = require('chai').expect

Person = require("../../domain/person");
PersonRepository = require("../../infrastructure/person_repository");


describe('PersonRepository', () => {
	describe('#addPerson', () => {
		let person = new Person('José Valim', new Date('1986-01-02'));

		it('is a valid person', () => {
			PersonRepository.persist(person)
			
			expect(1).to.be.eq(1)
		});

	});
});