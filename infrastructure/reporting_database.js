let environment = process.env.NODE_ENV
let config = require("../knexfile")[environment]
let knex = require("knex")(config)

class ReportingDatabase {
	static persistPerson({name, birthday, uuid = '1233b6a6-760e-471c-a061-dae03af34627'}) {
		
		knex.transaction(function (trx) {
			knex.insert({name, birthday, uuid})
				.into("people")
				.transacting(trx)
				.then(trx.commit)
				.catch(trx.rollback);
		}).then(function (inserts) {
		}).catch(function (error) {
			console.error(error);
		});

	}
}
module.exports = ReportingDatabase