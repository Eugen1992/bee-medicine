define(['underscore'], function(_) {
	var serviceEditTemplate = _.template([
										'<strong>Услуга: </strong> <br/><input type="text" class="js-edit-service service-extension-inputs" value="<%= serviceName %>"><br/>',
										'<strong>Цена: </strong> <br/><input type="text" class="js-edit-price service-extension-inputs" value="<%= price %>"><br/>',
										'<strong>Описание: </strong> <br/><textarea class="js-edit-description service-extension-textarea"><%= description %></textarea><br/>',
										'<button class="js-update edit-btns">Update</button>',
										'<button class="js-cancel edit-btns">Cancel</button>',
                                        '<button class="js-getOne edit-btns">Get one</button>'].join(' '));
	return serviceEditTemplate;
});