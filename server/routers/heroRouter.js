var express = require('express');
var router = express.Router();
//bring in mongoose
var mongoose = require('mongoose');
//bring in Schema
var Hero = require('../models/hero');

router.get('/hero', function(req, res){
  console.log('in hero get');
  res.sendStatus(200);
});

router.post('/hero', function(req, res){
  console.log('in hero post');
  res.sendStatus(200);
});

module.exports = router;
