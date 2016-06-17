var appDispathcer = require('./../dispatcher.js');
var EventEmitter = require('events').EventEmitter;

let _currentBooking = {
  name: '',
  phone1: '',
  day: 1
};

let validationRules = {
  name: /^[0-9]{7,}$/
};

class BookTimeStore extends EventEmitter {
  getCurrentBooking() {
    return _currentBooking;
  }
}
const bookTimeStore = new BookTimeStore();

appDispathcer.register((action) => {
  switch(action.actionType) {
    case 'booking-time-update':
      _currentBooking[action.field] = action.value;
      bookTimeStore.emit('updated');
      console.log(_currentBooking);
      break;
    case 'booking-time-save':
      data[action.field] = action.value;
      bookTimeStore.emit('updated');
      break;

  }


});

module.exports = bookTimeStore;