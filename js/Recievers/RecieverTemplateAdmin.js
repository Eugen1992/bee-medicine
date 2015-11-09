define(['underscore'], function(_) {	
	var recieverTemplateAdmin = _.template(['<strong>Адресат: </strong><br/><%= recieverAdress %><br/>', 
										'<button class="js-edit">Edit</button>',
										'<button class="js-delete">Delete</button>'].join(' '));
	return recieverTemplateAdmin;
});