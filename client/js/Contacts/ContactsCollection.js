define(['backbone', 'ContactModel'], function(Backbone, ContactModel) {	
	var ContactsCollection = Backbone.Collection.extend({
		model: ContactModel,
		url: '/contacts'
	});

	return ContactsCollection;
});