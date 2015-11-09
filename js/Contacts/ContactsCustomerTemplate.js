define(['underscore'], function(_) {
	var contactsCustomerTemplate = _.template(['Адрес: <%= address %>, 49004<br/>',
											'Телефон: <%= telephone %><br/>',
											'Время работы: <br><br><%= working_hours_weekday %><br/>',
											'<%= working_hours_weekend %><br/>'].join(' '));
	return contactsCustomerTemplate;
});