define(['underscore'], function(_) {
	var serviceTemplateAdmin = _.template(['<span class="sub-headline">Услуга: </span><%= serviceName %><br>', 
							'<span class="sub-headline">Цена:</span> <%= price %> грн<br>', 
							'<span class="sub-headline">Описание:</span> <%= description %><br>', 
							'<button class="js-edit">Edit</button>',
							'<button class="js-delete">Delete</button>'].join(' '));
	return serviceTemplateAdmin;
});