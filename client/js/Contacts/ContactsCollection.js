define(['backbone', 'ContactsModel'], function(Backbone, ContactsModel) {	
	var ContactsCollection = Backbone.Collection.extend({
		model: ContactsModel,
		url: '/contacts'
	});

	return ContactsCollection;
});