const appDispathcer = require('./../dispatcher.js');
const webApiUtils = require('./../web-api-utils.js');
const EventEmitter = require('events').EventEmitter;

let _services = [
  {
    name: '1 hour',
    price: 0,
    description: '1 hour of good and healthy sleep'
  }];

let _currentNewService = {
    name: '',
    price: '',
    description: ''
  };

let _isFetched = false;
let _isFetching = false;

class ServicesStore extends EventEmitter {
  isFetched() {
    return _isFetched;
  }
  getServices() {
    let result;
    if (!_isFetched && !_isFetching) {
      fetchServices();
      result = {
        status: 'fetching',
        data: null,
        currentNewService: _currentNewService
      }
    } else if (_isFetching) {
      result = {
        status: 'fetching',
        data: null,
        currentNewService: _currentNewService
      }
    } else {
      result = {
        status: 'fetched',
        data: _services,
        currentNewService: _currentNewService
      }
    }
    return result;
  }
  addService(service) {
    _services.push(service);
    servicesStore.emit('updated');
  }
  deleteService(service) {
    let index = _.findIndex(_services, service);
    _services.splice(index, 1);
    servicesStore.emit('updated');
  }
}
const servicesStore = new ServicesStore();

function fetchServices () {
  _isFetching = true;
  $.get('/services').done(function (data) {
    _services =data;
  }).fail(function (error){
    console.log(error);
  }).always(function () {
    _isFetched = true;
    _isFetching = false;
    servicesStore.emit('updated');
  });
}

function saveNewService () {
  $.post('/services',
    _currentNewService
  ).done(function (data) {
    _currentNewService = {
      serviceName: '',
      price: 0,
      description: ''};
    servicesStore.addService(data.service);
  }).fail(function (data) {
    console.log(data);
  })
}
function deleteService (service) {
  $.ajax({
    url: '/services/' + service._id,
    type: 'DELETE'})
    .done(function () {
      servicesStore.deleteService(service);
    })
    .fail(function(error) {
      console.log(error);
    });
}
appDispathcer.register((action) => {
  switch(action.actionType) {
    case 'service-update':
      //update service
      servicesStore.emit('updated');
      break;
    case 'new-service-update':
      _currentNewService[action.field] = action.value;
      servicesStore.emit('new-service-updated');
      break;
    case 'new-service-save':
      saveNewService();
      break;
    case 'service-delete':
      deleteService(action.service);
  }
});

module.exports = servicesStore;