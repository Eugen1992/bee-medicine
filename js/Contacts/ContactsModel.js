define(['backbone'], function(Backbone) {
	var ContactsModel = Backbone.Model.extend({
		defaults: {
			address: '',
			telephone: '',
			working_hours_weekday: '',
			working_hours_weekend: ''
		}
	});

	return ContactsModel;
});