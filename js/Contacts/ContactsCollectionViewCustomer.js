define(['jquery', 'underscore', 
		'backbone', 'ContactsCollection', 
		'ContactsViewCustomer', 'BookTimeModel', 
		'BookTimeView'], function($, _, Backbone, ContactsCollection, ContactsViewCustomer, BookTimeModel, BookTimeView) {
	var ContactsCollectionViewCustomer = Backbone.View.extend({
		tagName: 'div',
		initialize: function () {
			this.collection = new ContactsCollection();
			this.collection.on('sync', this.render, this);
			this.collection.fetch();
		},
		render: function () {
			this.$el.empty();
			this.collection.each(function(contact) {
				var contactsViewCustomer = new ContactsViewCustomer({model: contact});
				this.$el.append(contactsViewCustomer.el);
			}, this);
		}
	});

	return ContactsCollectionViewCustomer;
});