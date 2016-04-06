define(['underscore'], function(_) {
	var ContactsCollectionAdminTemplate = _.template([
      
      '<label class="common-inputLabel" for="adress">Adress</label>',
      '<input class="js-adress js-input common-input" name="adress"></input>',
      '<label class="common-inputLabel" for="phone">Phone</label>',
      '<input class="js-phone js-input common-input" name="phone"></input>',
      '<label class="common-inputLabel" for="email">Email</label>',
      '<input class="js-email js-input common-input" name="email"></input>',
      '<button class="js-add">Add new contact</button>',
      '<div class="js-contactsList contact-list"></div>'].join(" "));
	return ContactsCollectionAdminTemplate;
});