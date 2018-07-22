var db = require('./db');
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/events', function (_req, res) {
  res.json({events: db.findAll()});
});

app.get('/events/featured', function (_req, res) {
  res.json({events: db.featured()});
});

app.get('/events/:id', function (req, res) {
  var event = db.finById(req.params.id);
  if(event) {
    res.json({event: event});
  } else {
    res.sendStatus(404);
  }
});

app.post('/events', function (req, res) {
  res.json({event: db.create(req.body.event)});
});

module.exports = app;
