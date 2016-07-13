const appDispathcer = require('./../dispatcher.js');
const webApiUtils = require('./../web-api-utils.js');
const EventEmitter = require('events').EventEmitter;

let _receivers = [
  {
    address: ''
  }];

let _currentNewReceiver = {
  address: ''
};

let _isFetched = false;
let _isFetching = false;

class ReceiversStore extends EventEmitter {
  isFetched() {
    return _isFetched;
  }
  getReceivers() {
    let result;
    if (!_isFetched && !_isFetching) {
      fetchReceivers();
      result = {
        status: 'fetching',
        data: null,
        currentNewReceiver: _currentNewReceiver
      }
    } else if (_isFetching) {
      result = {
        status: 'fetching',
        data: null,
        currentNewReceiver: _currentNewReceiver
      }
    } else {
      result = {
        status: 'fetched',
        data: _receivers,
        currentNewReceiver: _currentNewReceiver
      }
    }
    return result;
  }
  addReceiver(receiver) {
    _receivers.push(receiver);
    receiversStore.emit('updated');
  }
  editReceiver(data) {
    var receiverToUpdate = _receivers.find(receiver => receiver._id == data._id);

    receiverToUpdate[data.field] = data.value;

    return receiverToUpdate;
  }
  deleteReceiver(receiver) {
    let index = _.findIndex(_receivers, receiver);
    _receivers.splice(index, 1);
    receiversStore.emit('updated');
  }
}
const receiversStore = new ReceiversStore();

function fetchReceivers () {
  _isFetching = true;
  $.get('/receivers').done(function (data) {
    _receivers = data;
  }).fail(function (error){
    console.log(error);
  }).always(function () {
    _isFetched = true;
    _isFetching = false;
    receiversStore.emit('updated');
  });
}

function saveNewReceiver () {
  $.post('/receivers',
    _currentNewReceiver
  ).done(function (data) {
    _currentNewReceiver = {
      receiverName: '',
      price: 0,
      description: ''};
    receiversStore.addReceiver(data);
  }).fail(function (data) {
    console.log(data);
  })
}
function deleteReceiver (receiver) {
  $.ajax({
    url: '/receivers/' + receiver._id,
    type: 'DELETE'})
    .done(function () {
      receiversStore.deleteReceiver(receiver);
    })
    .fail(function(error) {
      console.log(error);
    });
}
function editReceiver (data) {
  let editedReceiver = receiversStore.editReceiver(data);

  $.ajax({
    url: '/receivers/' + editedReceiver._id,
    data: editedReceiver,
    type: 'PUT'})
    .fail(function(error) {
      console.log(error);
    });
}
appDispathcer.register((action) => {
  switch(action.actionType) {
    case 'receiver-edit':
      editReceiver(action.data);
      receiversStore.emit('updated');
      break;
    case 'new-receiver-update':
      _currentNewReceiver[action.field] = action.value;
      receiversStore.emit('new-receiver-updated');
      break;
    case 'new-receiver-save':
      saveNewReceiver();
      break;
    case 'receiver-delete':
      deleteReceiver(action.receiver);
  }
});

module.exports = receiversStore;