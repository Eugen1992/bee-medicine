define(['underscore'], function(_) {
	var contactEditTemplate = _.template([      
      '<label class="common-inputLabel" for="adress">Адрес</label>',
      '<input class="js-adress js-input common-input" name="adress"></input>',
      '<label class="common-inputLabel" for="phone">Телефон</label>',
      '<input class="js-phone js-input common-input" name="phone"></input>',
      '<label class="common-inputLabel" for="email">Email</label>',
      '<input class="js-email js-input common-input" name="email"></input>',
										'<button class="js-update">Update</button>','<button class="js-cancel">Cancel</button>'
										].join(" "));
	return contactEditTemplate;
});

