const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');
const config = require('./config');
const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(express.static("./dist"))
massive(config.POSTGRES).then( db => {
  app.set('db', db);

const mainCtrl = require('./mainCtrl');

//---users-----
app.get('/api/users', mainCtrl.getUsers);


//---products------
app.get('/api/tvs', mainCtrl.getTvs);

app.get('/api/hometheaters', mainCtrl.getHometheaters);

app.get('/api/projectors', mainCtrl.getProjectors);

app.get('/api/dvdplayers', mainCtrl.getDvdplayers);

app.get('/api/headphones', mainCtrl.getHeadphones);

app.get('/api/cameras', mainCtrl.getCameras);

app.get('/api/cellphones', mainCtrl.getCellphones);

app.get('/api/camcorders', mainCtrl.getCamcorders);


})

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
