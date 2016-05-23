var ServiceCollectionViewCustomer = require('./Services/ServiceCollectionViewCustomer.js'),
    ContactsCollectionViewCustomer,
    BookTimeView,
    ServiceCollectionViewAdmin,
    ContactsCollectionViewAdmin,
    RecieversCollectionViewAdmin,
    ServiceCollection = require('./Services/ServiceCollection.js');
	var Router = Backbone.Router.extend({
		routes: {
			//"admin" : "admin",
			"" 		: "home"
		},
		/*initialize: function() {
			Backbone.Mediator.subscribe('navigate', this.navigate, this);
		},*/
		home: function() {
      var serviceCollection = new ServiceCollection();
      var serviceCollectionView = new ServiceCollectionViewCustomer({collection: serviceCollection});

      $('.js-service-block').html(serviceCollectionView.el);
    }
			/*var contactsCollectionView = new ContactsCollectionViewCustomer();

			$('.js-contact-block').html(contactsCollectionView.el);

			$('.js-contact').click(function() {
				var bookTimeView = new BookTimeView();
                $('body').append(bookTimeView.render().$el);
			});
		},
		admin: function() {

			var serviceCollectionView = new ServiceCollectionViewAdmin();
			var contactsCollectionView = new ContactsCollectionViewAdmin();
			var recieversCollectionViewAdmin = new RecieversCollectionViewAdmin();
			$('.js-service-block').html(serviceCollectionView.el);
			$('.js-contact-block').html(contactsCollectionView.el);
		}*/
	});

	module.exports = Router;