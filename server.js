let express = require('express')
let bodyParser = require("body-parser")

let app = express()
app.use(bodyParser.json())
app.set('port', process.env.HTTP_PORT || 3000)

let getPerson = (req, res) => { res.json({ id: req.params.id, name: "Ryan", birthday: '1991-01-20' }) }
let createPerson = (req, res) => { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) }
let updatePerson = (req, res) => { res.json(req.body) }
let deletePerson = (req, res) => { res.status(204).send() }

app.get('/persons/:id', getPerson)
app.post('/persons/', createPerson)
app.put('/persons/:id', updatePerson)
app.delete('/persons/:id', deletePerson)


app.get('/companies/:id', function (req, res) {
  res.json({ id: req.params.id, name: "Google Brasil", cnpj: '06.990.590/0001-23' })
});

app.post('/companies/', function (req, res) {
  //res.params <-- { name: "Google Brasil",cnpj: "06.990.590/0001-23" }
  res.status(201).json({ id: "dummy-dummy-dummy-dummy", })
});

app.put('/companies/:id', function (req, res) {
  res.json(req.body)
});

app.delete('/companies/:id', function (req, res) {
  res.status(204).send()
});

app.use(function (req, res) {
  res.status(404).send()
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.send(500);
});

app.listen(app.get('port'))

module.exports = app
