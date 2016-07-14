const appDispathcer = require('./../dispatcher.js');
const EventEmitter = require('events').EventEmitter;

const date = new Date();
let _bookingInProcess = {
  customerName: '',
  customerPhone: '',
  customerEmail: '',
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate() + 1,
  time: 18
};

let _currentValidState = {
  customerName: true,
  customerPhone: true,
  customerEmail: true,
  year: true,
  month: true,
  day: true,
  time: true
};

let _validationRules = {
  customerName: /[a-z ,.а-я'-]+$/i,
  customerPhone: /[1-9() -]+$/i,
  customerEmail: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
};

class BookTimeStore extends EventEmitter {
  getBookingInfo() {
    return {
      bookingInProcess: _bookingInProcess,
      validState: _currentValidState
    };
  }
  saveBooking() {
    $.post('/book-time',
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
      _validateField(action.field);
      bookTimeStore.emit('updated');
      break;
    case 'booking-time-save':
      bookTimeStore.saveBooking();
      bookTimeStore.emit('starting-to-save');
      break;

  }
});

function _validateField(field) {
  if (_validationRules[field]) {
    _currentValidState[field] = _validationRules[field].test(_bookingInProcess[field]);
  }

}

module.exports = bookTimeStore;