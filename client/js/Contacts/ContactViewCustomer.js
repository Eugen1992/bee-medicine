define(['jquery', 'underscore', 
	'backbone', 'ContactTemplate'], function($, _, Backbone, contactTemplate) {	
	var ContactViewCustomer = Backbone.View.extend({
		tagName: 'div',
		className: "container",
		template: contactTemplate,
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(this.template($.extend(this.model.toJSON(), {mode: 'customer'})));
			return this;
		}
	});

	return ContactViewCustomer;
});