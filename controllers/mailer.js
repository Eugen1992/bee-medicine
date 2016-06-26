var underscore = _ = require("underscore");
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'beesmedicine@gmail.com',
    pass: 'bees1962'
  }
});

var mailer = {
  sendOrderToAdmin: function (req, orderDetails) {
    var recieversAdreses = ['eugenalforov@gmail.com'];
    var result;
    req.db.collection('receivers').
    find({}).
    toArray(function (err, receivers) {
      var joinedAdreses = receivers.map(function (receiver) { return receiver.recieverAdress }).join(', ');

      var mailOptions = {
        from: 'Сон на ульях  <beesmedicine@gmail.com>', // sender address
        to: 'eugenalforov@gmail.com', // list of receivers
        subject: 'Заказ времени и услуги', // Subject line
        text: generateText(orderDetails)
      }

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          result = 'error';
        } else {
          result = 'success';
        }
      });
    });
  }
};

function generateText (options) {
  return 'Имя клиента: ' +
    options.customerName + '\n\n' +
    'Контактный номер телефона: ' +
    options.customerPhone + '\n\n' +
    'Дата: ' + options.year + '.' +
    options.month + '.'  + options.day + '\n\n' + 'Время: ' + options.time;
}

module.exports = mailer;