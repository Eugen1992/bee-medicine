define(['backbone', 'ServModel'], function(Backbone, Service) {
	var ServiceCollection = Backbone.Collection.extend({
		model: Service,
		url: '/services'
	});
	
	return ServiceCollection;
});