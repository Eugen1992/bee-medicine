define(['underscore'], function(_) {	
	var receiverAddTemplate = _.template([
										'<input type="text" class="js-add-new-receiver service-extension-inputs">',
										'<button class="js-add-reciever">Add receiver</button>'
									].join(' '));

	return receiverAddTemplate;
});
