const appDispathcer = require('./../dispatcher.js');
const webApiUtils = require('./../web-api-utils.js');
const EventEmitter = require('events').EventEmitter;

let _services = [
  {
    serviceName: '1 hour',
    price: 0,
    description: '1 hour of good and healthy sleep'
  }];

let _newService = {
    serviceName: '',
    price: '',
    description: ''
  };

let isFetched = false;

class ServicesStore extends EventEmitter {
  isFetched() {
    return isFetched;
  }
  getServices() {
    if (!isFetched) {
      fetchServices();
      return {
        status: 'fethcing',
        data: null
      }
    }
    return {
      status: 'fetched',
      data: _services
    }
  }
  saveNewService() {
    $.post('/services',
      _newService
    ).done(function (data) {
      let _newService = {
        serviceName: '',
        price: 0,
        description: ''};
      this.addService(data);
    }).fail(function (data) {
      console.log(data);
    })
  }
  addService(service) {
    _services.push(service);
  }
}
const servicesStore = new ServicesStore();

function fetchServices () {
  setTimeout(function () {
    isFetched = true;
    servicesStore.emit('updated');
  }, 5000);
}

appDispathcer.register((action) => {
  switch(action.actionType) {
    case 'service-update':
      //update service
      servicesStore.emit('updated');
      break;
    case 'new-service-update':
      _newService[action.field] = action.value;
      console.log(_newService);
      servicesStore.emit('new-service-updated');
      break;
    case 'new-service-save':
      servicesStore.saveNewService();
      servicesStore.emit('updated');
      break;
  }
});

module.exports = servicesStore;