const appDispathcer = require('./../dispatcher.js');
const EventEmitter = require('events').EventEmitter;

const date = new Date();
let _bookingInProcess = {
  customerName: '',
  customerPhone: '',
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate() + 1,
  time: 18
};

let validationRules = {
  name: /^[0-9]{7,}$/
};

class BookTimeStore extends EventEmitter {
  getBookingInfo() {
    return {
      bookingInProcess: _bookingInProcess
    };
  }
  saveBooking() {
    $.post('/contacts',
      _bookingInProcess
    ).done(function (data) {
      console.log(data);
    }).fail(function (data) {
      console.log(data);
    })
  }
}
const bookTimeStore = new BookTimeStore();

appDispathcer.register((action) => {
  switch(action.actionType) {
    case 'booking-time-update':
      _bookingInProcess[action.field] = action.value;
      bookTimeStore.emit('updated');
      break;
    case 'booking-time-save':
      bookTimeStore.saveBooking();
      bookTimeStore.emit('starting-to-save');
      break;

  }
});

module.exports = bookTimeStore;