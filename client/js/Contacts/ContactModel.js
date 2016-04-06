define(['backbone'], function(Backbone) {
	var ContactModel = Backbone.Model.extend({
		idAttribute: '_id',
        defaults: {
			adress: '',
			phone: '',
			email: ''
		}
	});

	return ContactModel;
});