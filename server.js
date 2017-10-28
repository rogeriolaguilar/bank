let express = require('express')
let bodyParser = require("body-parser")

let app = express()
app.use(bodyParser.json())
app.set('port', process.env.HTTP_PORT || 3000)

let Person = {
  get(req, res) { res.json({ id: req.params.id, name: "Ryan", birthday: '1991-01-20' }) },
  create(req, res) { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) },
  update(req, res) { res.json(req.body) },
  delete(req, res) { res.status(204).send() }
}

let Company = {
  get(req, res) { res.json({ id: req.params.id, name: "Google Brasil", cnpj: '06.990.590/0001-23' }) },
  create(req, res) { res.status(201).json({ id: "dummy-dummy-dummy-dummy" }) },
  update(req, res) { res.json(req.body) },
  delete(req, res) { res.status(204).send() }
}


app.route('/persons')
  .post(Person.create)
app.route('/persons/:id')
  .get(Person.get)
  .put(Person.update)
  .delete(Person.delete)

app.route('/companies')
  .post(Company.create)
app.route('/companies/:id')
  .get(Company.get)
  .put(Company.update)
  .delete(Company.delete)

app.use((req, res) => { res.status(404).send() });

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.send(500);
});

app.listen(app.get('port'))

module.exports = app
