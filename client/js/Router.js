define(['backbone', 'ServCollectionViewCust', 
	'ContactsCollectionViewCustomer', 'jsx!BookTimeView',
	'ServCollectionViewAdm', 'ContactsCollectionViewAdmin', 
	'RecieversCollectionViewAdmin', 'ServCollection'], function(Backbone, ServiceCollectionViewCustomer, ContactsCollectionViewCustomer, BookTimeView, ServiceCollectionViewAdmin, ContactsCollectionViewAdmin, RecieversCollectionViewAdmin, ServiceCollection) {
	var Router = Backbone.Router.extend({
		routes: {
			"admin" : "admin",
			"" 		: "home"
		},
		initialize: function() {
			Backbone.Mediator.subscribe('navigate', this.navigate, this);
		},
		home: function() {
            var serviceCollection = new ServiceCollection();
			var serviceCollectionView = new ServiceCollectionViewCustomer({collection: serviceCollection});
			var contactsCollectionView = new ContactsCollectionViewCustomer();
			$('.js-service-block').html(serviceCollectionView.el);
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
		}
	});

	return Router;
});