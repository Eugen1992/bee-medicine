define(['underscore'], function(_) {
	var serviceAddTemplate = _.template(['<div class="service-add-block service-extension">',
										'<span class="service-headline">Название </span><br/><input type="text" class="js-add-new-service-name service-extension-inputs"><br/>',
										'<span class="service-headline">Цена </span><br/><input type="text" class="js-add-new-service-price service-extension-inputs"><br/>',
										'<span class="service-headline">Описание </span><br/><textarea class="js-add-new-service-description service-extension-textarea"></textarea><br/>',
										'<button class="js-add">Add service</button>',
										'<button class="js-view-all">View All</button></div>'
									].join(' '));
	return serviceAddTemplate;
});
