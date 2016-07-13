function controller(app) {
  app.get("/services", function(req, res) { 
    req.db.collection('services').
      find({}).
      toArray(function (err, records) {
        res.send(records);
      });
  });
  app.get("/services:id", function(req, res) {
    req.db.collection('services').
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
  
  app.delete("/services/:id", function(req, res) {
    req.db.collection('services').
      deleteOne({'_id': req.ObjectId(req.params.id)}, function (err, result) {
        if (err) {
          res.sendStatus(500);  
        } else {
          res.sendStatus(204);
        }
      });
  });

   app.put("/services/:id", function(req, res) {
     delete req.body._id;
     req.db.collection('services').updateOne({'_id': req.ObjectId(req.params.id)}, req.body, {}, function (err, result) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send({status: 200});
        }
      });
   });

   app.post("/services", function(req, res){                                    
     req.db.collection('services').
      insertOne(req.body, {}, function (err, result) {
        if (err) {
          res.sendStatus(500);
        } else {
          res.status(201).json(result.ops[0]);
        }
      });
   });
}
module.exports.controller = controller;