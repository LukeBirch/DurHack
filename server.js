const express = require('express');
const fs = require('fs');

const app = express()
const port = 3000

app.use(express.static('client'));
app.use(express.json());

// require all necessary json files
const databaseData = require('./database.json');


app.get('/one', (req, res) => {
  res.send('Hello World!')
})

app.post('/timeinput', function (req, resp) {
  
  databaseData[req.body.person]["tod"] = req.body.time;
  console.log(databaseData[req.body.person]["tod"])
  fs.writeFileSync('./database.json', JSON.stringify(databaseData));
  resp.send('Successfully added data');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})