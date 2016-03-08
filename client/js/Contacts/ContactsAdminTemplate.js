define(['underscore'], function(_) {
	var contactsAdminTemplate = _.template(['Адрес: <br><%= address %><br><br>',
											'Телефон: <%= telephone %><br><br>',
											'Время работы: <br><%= working_hours_weekday %><br>',
											'<%= working_hours_weekend %><br>',
											'<button class="js-edit">Edit</button>',
											'<button class="js-delete">Delete</button>'].join(" "));
	return contactsAdminTemplate;
});