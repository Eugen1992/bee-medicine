define(['underscore'], function(_) {
	var contactEditTemplate = _.template(['Адрес: <br><input type="text" class="js-editAddress service-extension-inputs" value="<%= address %>"><br>',
										'Телефон: <br><input type="text" class="js-editTelephone service-extension-inputs" value="<%= telephone %>"><br>',
										'Время работы: <br><input type="text" class="js-editHoursWeekday service-extension-inputs" value="<%= working_hours_weekday %>"><br>',
										'<input type="text" class="js-editHoursWeekEnd service-extension-inputs" value="<%= working_hours_weekend %>"><br>',
										'<button class="js-update">Update</button>','<button class="js-cancel">Cancel</button>'
										].join(" "));
	return contactEditTemplate;
});

