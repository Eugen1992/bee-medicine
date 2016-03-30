define(['backbone', 'ServModel'], function(Backbone, Service) {
	var ServiceCollection = Backbone.Collection.extend({
        idAttribute: '_id',
		model: Service,
		url: '/services'
	});
	
	return ServiceCollection;
});