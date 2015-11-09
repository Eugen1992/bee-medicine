define(['backbone'], function(Backbone){	
	var Service = Backbone.Model.extend({
		defaults: {
			serviceName: '',
			price: 0,
			description: ''
		}
	});

	return Service;
});