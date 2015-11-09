define(['jquery', 'underscore', 
		'backbone', 'ContactsCollection', 
		'ContactsViewAdmin'], function($, _, Backbone, ContactsCollection, ContactsViewAdmin) {	
	var ContactsCollectionViewAdmin = Backbone.View.extend({
		tagName: 'div',
		initialize: function () {
			this.collection = new ContactsCollection();
			this.collection.on('sync', this.render, this);
			this.collection.fetch();

			this.on('change', this.render, this)
			this.on('destroy', this.removeContact)
			this.render();
		},
		render: function () {
			this.$el.empty();
			this.collection.each(function(contact) {
				var contactViewAdmin = new ContactsViewAdmin({model: contact});
				this.$el.append(contactViewAdmin.el);
			}, this);
		}
	});

	return ContactsCollectionViewAdmin;
});