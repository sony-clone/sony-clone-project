const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');

const app = express();
const PORT = 3000;

app.use(bodyParser.json())

massive({
  ssl: true,
  host: 'ec2-23-23-221-255.compute-1.amazonaws.com',
  port: 5432,
  database: 'd7k2fi2oklohso',
  user: 'briwwvymwkydhz',
  password: 'e9927b923969d533188d52d0c0c5d93bf5b78657e5d051fb270b52d8e81ccdf7'
}).then( db => {
  app.set('db', db);

const mainCtrl = require('./mainCtrl');

app.get('/api/products', mainCtrl.getProducts);


})

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
