var underscore = _ = require("underscore");
var nodemailer = require("nodemailer");

function controller(app) {
  var transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
       user: 'beesmedicine@gmail.com',
       pass: 'bees1962'
   }
 });
  
  var recievers = [
                {recieverAdress: 'eugenalforov@gmail.com', id: 1}
                ]
  app.post("/contact/booktime", function(req, res){ 
    var recieversAdreses = [];

    _.each(recievers, function(reciever) {
       recieversAdreses.push(reciever.recieverAdress);
    });

    var joinedAdreses = recieversAdreses.join(', ');
    
    var mailOptions = {
     from: 'noreply  <dimahrytsenko@gmail.com>', // sender address
     to: joinedAdreses, // list of receivers
     subject: 'Заказ времени и услуги', // Subject line
     text: 'Заказ  ' + '\n\n' + 'Имя клиента: ' + req.body.customerName + '\n\n' +  'Контактный номер телефона: ' + req.body.customerPhone + '\n\n' + 'Дата: ' + req.body.year + '.' + req.body.month + '.'  + req.body.day + '\n\n' + 'Время: ' + req.body.time // plaintext body
    }
    
    transporter.sendMail(mailOptions, function(error, info){ 
     if (error) {
       res.sendStatus(500);
     } else {
       res.send(JSON.stringify(req.body));
     }
    });
  });
}

module.exports.controller = controller;