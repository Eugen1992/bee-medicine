var mailer = require('./mailer.js');

function controller(app) {
  app.get("/contacts", function(req, res) { 
    req.db.collection('contacts').
      find({}).
      toArray(function (err, records) {
        res.send(records);
      });
  });
  app.get("/contacts/:id", function(req, res) { 
    req.db.collection('contacts').
      find({'_id': req.ObjectId(req.params.id)}).
      limit(1).
      toArray(function (err, records) {
        if (err) {
          res.sendStatus(500);  
        } else {
          res.sendStatus(200);
        }
      });
  });
  
  app.delete("/contacts/:id", function(req, res) { 
    req.db.collection('contacts').
      deleteOne({'_id': req.ObjectId(req.params.id)}, function (err, numberOfDeleted) {
        if (err) {
          res.sendStatus(500);  
        } else {
          res.sendStatus(200);
        }
      });
  });

   app.put("/contacts/:id", function(req, res) {
     delete req.body._id;
     req.db.collection('contacts').
      updateOne({'_id': req.ObjectId(req.params.id)}, req.body, {}, function (err, result) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send(result);
        }
      });
   });

   app.post("/contacts", function(req, res){
     req.db.collection('contacts').
      insertOne(req.body, {}, function (err, result) {
        if (err) {
          res.sendStatus(500);
        } else {
          mailer.sendOrderToAdmin(req, result.ops[0]);
          res.send({status: 200, contact: result.ops[0]});
        }
      });
   });
}
module.exports.controller = controller;