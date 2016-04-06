define(['jquery', 'underscore', 'backbone', 'ContactTemplate', 'ContactCreateEditTemplate'], function($, _, Backbone, contactTemplate, contactCreateEditTemplate) {	
	var ContactViewAdmin = Backbone.View.extend({
		tagName: 'div',
		className: 'admin-block',
		template: contactTemplate,
		editTemplate: contactCreateEditTemplate,
		events: {
			'click .js-edit'   : 'editContact',
			'click .js-delete' : 'removeContact',
			'click .js-update' : 'updateContact',
			'click .js-cancel' : 'cancel'

		},
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(this.template($.extend(true, this.model.toJSON(), {mode: 'admin'})));
			return this;
		},
		editContact: function() {
			this.$el.html(this.editTemplate(this.model.toJSON()));
		},
		removeContact: function () {
			this.remove();
			this.model.destroy();
		},
		updateContact: function() {
			var contact = this.collection.create({
				phone: this.$('.js-phone').val(),
				email: this.$('.js-phone').val(),
				adress: this.$('.js-adress').val()
			});
			this.model.save();
			this.render();
		},
		cancel: function() {
			this.render();
		}
	});

	return ContactViewAdmin;
});