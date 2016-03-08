define(['underscore'], function(_) {
	var recieverEditTemplate = _.template([
										'<strong>Адресат: </strong> <input type="text" class="js-edit-reciever service-extension-inputs" value="<%= recieverAdress %>"><br>',
										'<button class="js-update">Update</button>',
										'<button class="js-cancel">Cancel</button>'].join(' '));
	return recieverEditTemplate;
});