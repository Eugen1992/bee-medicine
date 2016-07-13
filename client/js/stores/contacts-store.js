const appDispathcer = require('./../dispatcher.js');
const webApiUtils = require('./../web-api-utils.js');
const EventEmitter = require('events').EventEmitter;

let _contacts = [
  {
    name: 'phone',
    value: ''
  }];

let _currentNewContact = {
  name: '',
  value: ''
};

let _isFetched = false;
let _isFetching = false;

class ContactsStore extends EventEmitter {
  isFetched() {
    return _isFetched;
  }
  getContacts() {
    let result;
    if (!_isFetched && !_isFetching) {
      fetchContacts();
      result = {
        status: 'fetching',
        data: null,
        currentNewContact: _currentNewContact
      }
    } else if (_isFetching) {
      result = {
        status: 'fetching',
        data: null,
        currentNewContact: _currentNewContact
      }
    } else {
      result = {
        status: 'fetched',
        data: _contacts,
        currentNewContact: _currentNewContact
      }
    }
    return result;
  }
  addContact(contact) {
    _contacts.push(contact);
    contactsStore.emit('updated');
  }
  editContact(data) {
    var contactToUpdate = _contacts.find(contact => contact._id == data._id);

    contactToUpdate[data.field] = data.value;

    return contactToUpdate;
  }
  deleteContact(contact) {
    let index = _.findIndex(_contacts, contact);
    _contacts.splice(index, 1);
    contactsStore.emit('updated');
  }
}
const contactsStore = new ContactsStore();

function fetchContacts () {
  _isFetching = true;
  $.get('/contacts').done(function (data) {
    _contacts = data;
  }).fail(function (error){
    console.log(error);
  }).always(function () {
    _isFetched = true;
    _isFetching = false;
    contactsStore.emit('updated');
  });
}

function saveNewContact () {
  $.post('/contacts',
    _currentNewContact
  ).done(function (data) {
    _currentNewContact = {
      contactName: '',
      price: 0,
      description: ''};
    contactsStore.addContact(data);
  }).fail(function (data) {
    console.log(data);
  })
}
function deleteContact (contact) {
  $.ajax({
    url: '/contacts/' + contact._id,
    type: 'DELETE'})
    .done(function () {
      contactsStore.deleteContact(contact);
    })
    .fail(function(error) {
      console.log(error);
    });
}
function editContact (data) {
  let editedContact = contactsStore.editContact(data);
  console.log(data);
  $.ajax({
    url: '/contacts/' + editedContact._id,
    data: editedContact,
    type: 'PUT'})
    .fail(function(error) {
      console.log(error);
    });
}
appDispathcer.register((action) => {
  switch(action.actionType) {
    case 'contact-edit':
      editContact(action.data);
      contactsStore.emit('updated');
      break;
    case 'new-contact-update':
      _currentNewContact[action.field] = action.value;
      contactsStore.emit('new-contact-updated');
      break;
    case 'new-contact-save':
      saveNewContact();
      break;
    case 'contact-delete':
      deleteContact(action.contact);
  }
});

module.exports = contactsStore;