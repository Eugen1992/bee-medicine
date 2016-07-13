const mailer = require('./mailer.js');

function controller(app) {
  app.get("/book-time", function(req, res) {
    req.db.collection('bookings').
    find({}).
    toArray(function (err, records) {
      res.send(records);
    });
  });
  app.get("/book-time/:id", function(req, res) {
    req.db.collection('bookings').
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

  app.delete("/book-time/:id", function(req, res) {
    req.db.collection('bookings').
    deleteOne({'_id': req.ObjectId(req.params._id)}, function (err, numberOfDeleted) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  });

  app.put("/book-time/:id", function(req, res) {
    delete req.body._id;
    req.db.collection('bookings').
    updateOne({'_id': req.ObjectId(req.params.id)}, req.body, {}, function (err, result) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(result);
      }
    });
  });

  app.post("/book-time", function(req, res){
    req.db.collection('bookings').
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