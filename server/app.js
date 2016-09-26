var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Heroes');
//bring in router
var heroRouter = require('./routers/heroRouter');
app.use('/heroes', heroRouter);

app.listen(4242, function(){
  console.log('server up on 4242');
});

app.get('/', function(req, res){
  console.log('base hit');
  res.sendFile(path.resolve('public/index.html'));
});

app.use(express.static('public'));
