define(['jquery', 'underscore', 
		'backbone', 'ServTemplCustomer'], function($, _, Backbone, serviceDepictTemplate) {	
	var ServiceViewCustomer = Backbone.View.extend({
		service: serviceDepictTemplate,
		tagName: 'div',
		className: 'js-service offer container',

		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(this.service(this.model.toJSON()));
			return this;
		}
	});

	return ServiceViewCustomer;
});