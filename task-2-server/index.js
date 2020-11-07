const express = require('express');
const app = express();
const port = 4000;
let data = require('./data/notes.json');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

app.get('/api/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(data);
})

app.post('/api/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  data = req.body;
  console.log(req.body);
  fs.writeFileSync('./data/notes.json', JSON.stringify(data.notes));
  res.status(200).send();
})

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
})