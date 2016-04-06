define(['backbone', 'RecieverModel'], function(Backbone, Reciever) {	
	var ReceiversCollection = Backbone.Collection.extend({
		model: Reciever,
		url: '/receivers'
	});

	return ReceiversCollection;
});