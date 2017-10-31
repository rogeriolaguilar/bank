let environment = process.env.NODE_ENV || "development";
let config = require("../../knexfile")[environment];
let knex = require("knex")(config);

class PersonRepository {
	persist(person) {
		knex.transaction(function(trx) {
			knex.insert(person)
                .into("persons")
                .transacting(trx)
                .then(trx.commit)
                .catch(trx.rollback);
		}).then(function(inserts) {
		}).catch(function(error) {
			console.error(error);
		});

	}
}
module.exports = PersonRepository;