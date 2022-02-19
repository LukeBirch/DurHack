const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const fs = require('fs');

//express app
const app = express();
app.use(express.static('client'));
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//json file
const databaseData = require('./database.json');


app.post('/frequency',(req, res) => {
    databaseData[req.body.person]["frequency"] = req.body.frequency;
    fs.writeFileSync('./database.json', JSON.stringify(databaseData));
    console.log(req.body.frequency)
    res.send('yes')
});

app.post('/timeinput',(req, res) => {
    databaseData[req.body.person]["tod"] = req.body.time;
    fs.writeFileSync('./database.json', JSON.stringify(databaseData));
    console.log(databaseData[req.body.person]["tod"])
    res.send('yes')
});

app.listen(8000); 