var servicesModule = require('./Services'),
    bookingModule = require('./BookingModule'),
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
    var serviceCollection = new servicesModule.Collection();
    var serviceCollectionView = new servicesModule.CollectionViewCustomer({collection: serviceCollection});

    $('.js-service-block').html(serviceCollectionView.el);
    /*var contactsCollectionView = new ContactsCollectionViewCustomer();

     $('.js-contact-block').html(contactsCollectionView.el);*/

    var BookTimeView = bookingModule.View;
    ReactDOM.render(
      <BookTimeView />,
      $('.js-popupWrapper')[0]
    );
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