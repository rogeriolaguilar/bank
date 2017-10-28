let express = require('express')
let bodyParser = require("body-parser")

let people = require('./routes/people')
let companies = require('./routes/companies')
let transactions = require('./routes/transactions')

let app = express()
app.use(bodyParser.json())
app.set('port', process.env.HTTP_PORT || 3000)


app.use('/people', people)
app.use('/companies', companies)
app.use('/transactions', transactions)

app.use((req, res) => { res.status(404).send() });

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.send(500);
});

app.listen(app.get('port'))

module.exports = app
