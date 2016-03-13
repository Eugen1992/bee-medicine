define(['backbone'], function(Backbone) {
	var RegistrationFormModel = Backbone.Model.extend({
		url: '/contact/booktime'
	});

	return RegistrationFormModel;
});