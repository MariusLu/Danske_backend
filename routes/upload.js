const express = require('express')
var csv = require("csvtojson");

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

let app = express.Router()

app.post('/', (req, res) => {
  if (!req.files) {
   return res.status(400).send('No files were uploaded.');
  }
     var logFile = req.files.file.data.toString('utf8');
    csv({delimiter:[";"]}).fromString(logFile)
    .then(data => {
        jsonString = JSON.stringify(data)
        localStorage.setItem('data', jsonString);
    }).catch(err => {
      return res.status(400).send(err);
   });
    res.status(200).send("File uploaded");
 });

module.exports = app
