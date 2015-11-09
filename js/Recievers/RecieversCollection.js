define(['backbone', 'RecieverModel'], function(Backbone, Reciever) {	
	var ReceiversCollection = Backbone.Collection.extend({
		model: Reciever,
		url: '/recievers'
	});

	return ReceiversCollection;
});