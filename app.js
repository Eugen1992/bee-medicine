var express = require("express");
var underscore = _ = require("underscore");
var bodyParser = require("body-parser");
var mailer = require('./controllers/contact.js');
var serviceController = require('./controllers/services.js');
var app = express();
var mongoDb = require('mongodb');
var MongoClient = mongoDb.MongoClient;
var ObjectId = mongoDb.ObjectID;

MongoClient.connect('mongodb://127.0.0.1:27017/', function (err, db) {
  app.use(function(req,res,next){
    req.db = db;
    req.ObjectId = ObjectId;
    next();
  });
  serviceController.controller(app);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/client'));

var modulesData = {};


modulesData.services = [
                {serviceName: '1 час', price: 40, description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', id: 101}, 
                {serviceName: '3 часа', price: 110, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis accusantium, laudantium perspiciatis porro, ratione voluptatibus cumque, nostrum magnam consequatur provident eveniet illum pariatur est. Alias cumque sunt laudantium delectus deleniti.', id: 102},
                {serviceName: '8 часов и более', price: 300, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae possimus fuga repudiandae aliquam ea iure quod quam a dolorum vitae, soluta, odio, aspernatur assumenda aperiam quidem cum! Sequi, sunt, unde!', id: 103} 
              ];
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
