define(['jquery', 'underscore', 
		'backbone', 'ContactsCollection', 
		'ContactViewAdmin', 'ContactsCollectionAdminTemplate'], function($, _, Backbone, ContactsCollection, ContactViewAdmin, ContactsCollectionAdminTemplate) {	
	var ContactsCollectionViewAdmin = Backbone.View.extend({
		tagName: 'div',
        template: ContactsCollectionAdminTemplate,
        defaults: {
          collectionSelector: '.js-contactsList',
          inputSelector: '.js-input'
        },
        events: {
          'click .js-add': 'addContact'
        },
		initialize: function () {
			this.collection = new ContactsCollection();
			this.collection.on('sync', this.render, this);
			this.collection.fetch();

			this.on('change', this.render, this)
			this.on('destroy', this.removeContact)
			this.render();
		},
        addContact: function() {
			var contact = this.collection.create({
				phone: this.$('.js-phone').val(),
				email: this.$('.js-phone').val(),
				adress: this.$('.js-adress').val()
			});
			this.renderOne(contact);
			this.resetInputs();
		},
        resetInputs: function () {
          this.$(this.defaults.inputSelector).val('');
        },
		render: function () {
			this.$el.html(this.template());
			this.collection.each(function(contact) {
				this.renderOne(contact);
			}, this);
		},
        renderOne: function (modelToRender) {
          var contactViewAdmin = new ContactViewAdmin({model: modelToRender});
          this.$(this.defaults.collectionSelector).append(contactViewAdmin.el);
        }
	});

	return ContactsCollectionViewAdmin;
});