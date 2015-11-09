define(['backbone', 'ServCollectionViewCust', 
	'ContactsCollectionViewCustomer', 'BookTimeView',
	'ServCollectionViewAdm', 'ContactsCollectionViewAdmin', 
	'RecieversCollectionViewAdmin', 'backbone-mediator'], function(Backbone, ServiceCollectionViewCustomer, ContactsCollectionViewCustomer, BookTimeView, ServiceCollectionViewAdmin, ContactsCollectionViewAdmin, RecieversCollectionViewAdmin) {
	var Router = Backbone.Router.extend({
		routes: {
			"admin" : "admin",
			"" 		: "home"
		},
		initialize: function() {
			Backbone.Mediator.subscribe('navigate', this.navigate, this);
		},
		home: function() {
			var serviceCollectionView = new ServiceCollectionViewCustomer();
			var contactsCollectionView = new ContactsCollectionViewCustomer();
			$('.js-service-block').html(serviceCollectionView.el);
			$('.js-contact-block').html(contactsCollectionView.el);

			$('.js-book').each(function() {
				var bookTimeView = new BookTimeView({el: $(this)});
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