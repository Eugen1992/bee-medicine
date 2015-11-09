define(['jquery', 'underscore', 
	'backbone', 'ContactsCustomerTemplate'], function($, _, Backbone, contactsCustomerTemplate) {	
	var ContactsViewCustomer = Backbone.View.extend({
		tagName: 'div',
		className: "container",
		contactsTemplateCustomer: contactsCustomerTemplate,
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(this.contactsTemplateCustomer(this.model.toJSON()));
			return this;
		}
	});

	return ContactsViewCustomer;
});