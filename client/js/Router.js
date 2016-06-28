var servicesModule = require('./Services'),
    //App = require('./app'),
    ContactsCollectionViewCustomer,
    BookTimeView,
    ServiceCollectionViewAdmin,
    ContactsCollectionViewAdmin,
    RecieversCollectionViewAdmin;

var Router = Backbone.Router.extend({
  routes: {
    //"admin" : "admin",
    "" 		: "home"
  },
  /*initialize: function() {
    Backbone.Mediator.subscribe('navigate', this.navigate, this);
  },*/
  home: function() {
    //var BookTimeView = bookingModule.View;
    //var serviceCollection = new servicesModule.Collection();
    //var serviceCollectionView = new servicesModule.CollectionViewCustomer({collection: serviceCollection});

    //$('.js-service-block').html(serviceCollectionView.el);
    /*var contactsCollectionView = new ContactsCollectionViewCustomer();

     $('.js-contact-block').html(contactsCollectionView.el);*/

  }
  /*admin: function() {

    var serviceCollectionView = new ServiceCollectionViewAdmin();
    var contactsCollectionView = new ContactsCollectionViewAdmin();
    var recieversCollectionViewAdmin = new RecieversCollectionViewAdmin();
    $('.js-service-block').html(serviceCollectionView.el);
    $('.js-contact-block').html(contactsCollectionView.el);
  }*/
});

	module.exports = Router;