function controller(app) {
  app.get("/receivers", function(req, res) {
    req.db.collection('receivers').
    find({}).
    toArray(function (err, records) {
      res.send(records);
    });
  });
  app.get("/receivers/:id", function(req, res) {
    req.db.collection('receivers').
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

  app.delete("/receivers/:id", function(req, res) {
    req.db.collection('receivers').
    deleteOne({'_id': req.ObjectId(req.params.id)}, function (err, numberOfDeleted) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(204);
      }
    });
  });

  app.put("/receivers/:id", function(req, res) {
    delete req.body._id;
    req.db.collection('receivers').
    updateOne({'_id': req.ObjectId(req.params.id)}, req.body, {}, function (err, result) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  });

  app.post("/receivers", function(req, res){
    req.db.collection('receivers').
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