var express = require('express');
var NPVCalculation= require("./Calculation.js");
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/calculatenpv', function (req, res) {
  var npvCalculation = new NPVCalculation(10000,.1,3000,5);
  npvCalculation.Execute();
  
  res.send("Result is :" + parseFloat(npvCalculation.result));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});