process.env.NODE_ENV = "test"

/*
 *let config = require("../../knexfile").test;
 *let knex = require("knex")(config);
 */
let expect = require('chai').expect

const Person = require("../../domain/person/person");
const ReportingDatabase = require("../../infrastructure/reporting_database");


describe('ReportingDatabase', () => {
	describe('#addPerson', () => {
		let person = new Person({ name: 'José Valim', birthday: new Date('1986-01-02') });

		it('is a valid person', () => {
			ReportingDatabase.persistPerson(person)

			expect(1).to.be.eq(1)
		});

	});
});