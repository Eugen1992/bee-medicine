function controller(app) {
  app.get("/services", function(req, res) { 
    req.db.collection('services').find({}).toArray(function (err, records) {
      res.send(records);
    });
  });

   app.delete("/services/:id", function(req, res) { 
       for (var i = 0; i < serviceCollection.length; i++) {
         if (req.params.id == serviceCollection[i].id) {
           serviceCollection.splice(i, 1);
         };
       };
   });

   app.put("/services/:id", function(req, res) {
       for (var i = 0; i < serviceCollection.length; i++) {
         if (req.params.id == serviceCollection[i].id) {
           serviceCollection[i] = req.body;
         };
       };
       res.send("Got it!!");
   });

   app.post("/services", function(req, res){                                    
     serviceCollection.push(req.body);
     for (var i = 0; i < serviceCollection.length; i++) {
       if (serviceCollection[i].id == undefined) {
         serviceCollection[i].id = serviceCollection[i-1].id + 1;
       };
     };
   });
}
module.exports.controller = controller;