var underscore = _ = require("underscore");
var nodemailer = require("nodemailer");

function controller(app) {
  var transporter = nodemailer.createTransport({
   service: 'Gmail',
   auth: {
       user: 'example@gmail.com',
       pass: 'password'
   }
 });
  
  var recievers = [
                {recieverAdress: 'dimahrytsenko@gmail.com', id: 1}
                ]
  app.post("/registrationform", function(req, res){ 
    var recieversAdreses = [];

    _.each(recievers, function(reciever) {
       recieversAdreses.push(reciever.recieverAdress);
    });

    var joinedAdreses = recieversAdreses.join(', ');
    
    var mailOptions = {
     from: 'noreply  <dimahrytsenko@gmail.com>', // sender address
     to: joinedAdreses, // list of receivers
     subject: 'Заказ времени и услуги', // Subject line
     text: 'Заказ  ' + '\n\n' + 'Имя клиента: ' + req.body.customerName + '\n\n' +  'Контактный номер телефона: ' + req.body.customerPhone + '\n\n' + 'Желаемая дата получения услуги: ' + req.body.dateOfProcedure + '\n\n' + 'Коментарии и пожелания: ' + req.body.customerComments, // plaintext body
    }
    
    transporter.sendMail(mailOptions, function(error, info){ 
     if(error){
         console.log('Error', error);
     }else{
         console.log('Message sent: ' + info.response);
     }
    });
  });
}

module.exports.controller = controller;