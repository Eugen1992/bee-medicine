define(['backbone'], function(Backbone) {
	var RegistrationFormModel = Backbone.Model.extend({
		url: '/registrationform'
	});

	return RegistrationFormModel;
});