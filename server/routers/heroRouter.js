var express = require('express');
var router = express.Router();
//bring in mongoose
var mongoose = require('mongoose');
//bring in Schema
var Hero = require('../models/hero');

router.get('/hero', function(req, res){
  console.log('in hero get');
  Hero.find({}, function(err, results){
    if (err){
      console.log(err);
      res.sendStatus(500);
    }
    else {
      res.send(results);
    }
  });
});

router.post('/hero', function(req, res){
  console.log('in hero post');
  var newHero = new Hero ({
    alias: req.body.alias,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    city: req.body.city,
    power_name: req.body.power_name
  });

  newHero.save(function(err){
    console.log('saving new hero:', newHero);
    if (err){
      console.log(err);
      res.sendStatus(500);
    }
    else {
      console.log('hero saved');
      res.sendStatus(200);
    }
  });
});

module.exports = router;
