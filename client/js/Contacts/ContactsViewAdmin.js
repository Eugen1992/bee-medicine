define(['jquery', 'underscore', 'backbone', 'ContactsAdminTemplate', 'ContactsAdminEditTemplate'], function($, _, Backbone, contactsAdminTemplate, contactEditTemplate) {	
	var ContactsViewAdmin = Backbone.View.extend({
		tagName: 'div',
		className: 'admin-block',
		adminTemplate: contactsAdminTemplate,
		editTemplate: contactEditTemplate,
		events: {
			'click .js-edit'   : 'editContact',
			'click .js-delete' : 'removeContact',
			'click .js-update' : 'updateContact',
			'click .js-cancel' 	   : 'cancel'

		},
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(this.adminTemplate(this.model.toJSON()));
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
			this.model.set('address', this.$('.js-editAddress').val());
			this.model.set('telephone', this.$('.js-editTelephone').val());
			this.model.set('working_hours_weekday', this.$('.js-editHoursWeekday').val());
			this.model.set('working_hours_weekend', this.$('.js-editHoursWeekend').val());
			this.model.save();
			this.render();
		},
		cancel: function() {
			var self = this;
			self.render();
		}
	});

	return ContactsViewAdmin;
});