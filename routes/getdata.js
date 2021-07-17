const express = require('express')

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }

let app = express.Router()

app.get('/',function(req,res){
    var data = localStorage.getItem('data')
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);
});

module.exports = app
