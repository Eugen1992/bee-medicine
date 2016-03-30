var express = require("express");
var underscore = _ = require("underscore");
var bodyParser = require("body-parser");
var mailer = require('./controllers/contact.js');
var serviceController = require('./controllers/services.js');
var app = express();
var mongoDb = require('mongodb');
var MongoClient = mongoDb.MongoClient;
var ObjectId = mongoDb.ObjectID;

process.env.PWD = process.cwd();
var herokuDB = 'mongodb://heroku_j3fmzffv:9c4o9d1fad6h19p1abs7fl1u6g@ds011880.mlab.com:11880/heroku_j3fmzffv';
var localDB = 'mongodb://localhost:27017'
MongoClient.connect(herokuDB, function (err, db) {
  app.use(function(req,res,next){
    req.db = db;
    req.ObjectId = ObjectId;
    next();
  });
  serviceController.controller(app);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(process.env.PWD + '/client'));

var modulesData = {};

modulesData.contacts = [
                {address: 'г. Днепропетровск, ул. Василя Гетьмана 34/12', 
                telephone: '+38 096 587 87 85', 
               working_hours_weekday: 'Пн-Чт: 06.00 - 18.00',
                working_hours_weekend:'Пт-Вс: 10.00-24.00', 
                id: 1}
                ]

var modules = ['contacts'];

createREST();
mailer.controller(app);
app.get("/", function(req, res) {
  res.sendfile('index.html');
});
app.get("/admin", function(req, res) {
  res.sendfile('client/index.html');
});

function createREST () { 
  _.each(modules, function(module) {
     app.get("/" + module, function(req, res) { 
      res.send(modulesData[module]);
     });

     app.delete("/" + module + "/:id", function(req, res) { 
         for (var i = 0; i < modulesData[module].length; i++) {
           if (req.params.id == modulesData[module][i].id) {
             modulesData[module].splice(i, 1);
           };
         };
     });

     app.put("/" + module + "/:id", function(req, res) {
         for (var i = 0; i < modulesData[module].length; i++) {
           if (req.params.id == modulesData[module][i].id) {
             modulesData[module][i] = req.body;
           };
         };
         res.send("Got it!!");
     });

     app.post("/" + module, function(req, res){                                    
       modulesData[module].push(req.body);
       for (var i = 0; i < modulesData[module].length; i++) {
         if (modulesData[module][i].id == undefined) {
           modulesData[module][i].id = modulesData[module][i-1].id + 1;
         };
       };
     });
  });
}


var port = process.env.PORT || 1020;
app.listen(port, function() {
  console.log("Listening on " + port);
});
