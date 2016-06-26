var express = require("express");
var underscore = _ = require("underscore");
var bodyParser = require("body-parser");
var serviceController = require('./controllers/services.js');
var contactController = require('./controllers/contacts.js');
var receiversController = require('./controllers/receivers.js');
var app = express();
var mongoDb = require('mongodb');
var MongoClient = mongoDb.MongoClient;
var ObjectId = mongoDb.ObjectID;

process.env.PWD = process.cwd();
//mongodb://heroku_j3fmzffv:<dbpassword>@ds011880.mlab.com:11880/heroku_j3fmzffv
var herokuDB = 'mongodb://heroku_j3fmzffv:gagar1506@ds011880.mlab.com:11880/heroku_j3fmzffv';
var localDB = 'mongodb://localhost:27017';
MongoClient.connect(localDB, function (err, db) {
  if (err) {
    console.log(err);
  }
  app.use(function(req,res,next){
    req.db = db;
    req.ObjectId = ObjectId;
    next();
  });
  serviceController.controller(app);
  contactController.controller(app);
  receiversController.controller(app);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(process.env.PWD + '/client'));


app.get("/", function(req, res) {
  res.sendfile('index.html');
});
app.get("/admin", function(req, res) {
  res.sendfile('client/index.html');
});

var port = process.env.PORT || 1020;
app.listen(port, function() {
  console.log("Listening on " + port);
});
