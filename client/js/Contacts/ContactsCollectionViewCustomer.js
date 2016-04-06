define(['jquery', 'underscore', 
		'backbone', 'ContactsCollection', 
		'ContactViewCustomer'], function($, _, Backbone, ContactsCollection, ContactViewCustomer) {
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
				var contactViewCustomer = new ContactViewCustomer({model: contact});
				this.$el.append(contactViewCustomer.el);
			}, this);
		}
	});

	return ContactsCollectionViewCustomer;
});