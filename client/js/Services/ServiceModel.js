define(['backbone'], function(Backbone){
	var Service = Backbone.Model.extend({
        idAttribute: '_id',
		defaults: {
			serviceName: '',
			price: 0,
			description: ''
		}
	});

	return Service;
});