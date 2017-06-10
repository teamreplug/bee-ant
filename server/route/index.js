(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var mongojs = require('mongojs');
  var db = mongojs('mongodb://admin:admin123@ds063809.mongolab.com:63809/meantodo', ['firefuse']);

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });

  router.get('/api/firefuse', function(req, res) {
    db.firefuse.find(function(err, data) {
      res.json(data);
    });
  });

  router.post('/api/firefuse', function(req, res) {
    db.firefuse.insert(req.body, function(err, data) {
      res.json(data);
    });

  });

  router.put('/api/firefuse', function(req, res) {

    db.firefuse.update({
      _id: mongojs.ObjectId(req.body._id)
    }, {
      isCompleted: req.body.isCompleted,
      todo: req.body.todo
    }, {}, function(err, data) {
      res.json(data);
    });

  });

  router.delete('/api/firefuse/:_id', function(req, res) {
    db.firefuse.remove({
      _id: mongojs.ObjectId(req.params._id)
    }, '', function(err, data) {
      res.json(data);
    });

  });

  module.exports = router;

}());
