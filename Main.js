require.config({
	paths: {
		//libraries

		'jquery' : 'libraries/jquery',
		'underscore' : 'libraries/underscore',
		'backbone' : 'libraries/backbone',
		'backbone-mediator' : 'libraries/backbone-mediator',
		
		//service module

		'ServModel' : 'js/Services/ServiceModel',
		'ServViewCust' : 'js/Services/ServiceViewCustomer',
		'ServViewAdm' : 'js/Services/ServiceViewAdmin',
		'ServCollection' : 'js/Services/ServiceCollection',
		'ServCollectionViewCust' : 'js/Services/ServiceCollectionViewCustomer',
		'ServCollectionViewAdm' : 'js/Services/ServiceCollectionViewAdmin',
		'ServTemplCustomer' : 'js/Services/ServiceTemplateCustomer',
		'ServTemplAdmin' : 'js/Services/ServiceTemplateAdmin',
		'ServEditTempl' : 'js/Services/serviceEditTemplate',
		'ServAddTempl' : 'js/Services/ServiceAddTemplate',

		//conacts module

		'ContactsModel' : 'js/Contacts/ContactsModel',
		'ContactsViewCustomer' : 'js/Contacts/ContactsViewCustomer',
		'ContactsViewAdmin' : 'js/Contacts/ContactsViewAdmin',
		'ContactsCollection' : 'js/Contacts/ContactsCollection',
		'ContactsCollectionViewCustomer' : 'js/Contacts/ContactsCollectionViewCustomer',
		'ContactsCollectionViewAdmin' : 'js/Contacts/ContactsCollectionViewAdmin',
		'ContactsCustomerTemplate' : 'js/Contacts/ContactsCustomerTemplate',
		'ContactsAdminTemplate' : 'js/Contacts/ContactsAdminTemplate',
		'ContactsAdminEditTemplate' : 'js/Contacts/ContactsAdminEditTemplate',

		//book module

		'BookTimeModel' : 'js/Contacts/BookTimeModel',
		'BookTimeView' : 'js/Contacts/BookTimeView',
		'BookTimeTemplate' : 'js/Contacts/BookTimeTemplate',
		'RegForm' : 'js/Contacts/RegistrationFormModel',

		//recievers module

		'RecieverModel' : 'js/Recievers/RecieverModel',
		'RecieversCollection' : 'js/Recievers/RecieversCollection',
		'RecieversViewAdmin' : 'js/Recievers/RecieverViewAdmin',
		'RecieversCollectionViewAdmin' : 'js/Recievers/RecieversCollectionViewAdmin',
		'RecieversAddTemplate' : 'js/Recievers/RecieverAddTemplate',
		'RecieversEditTemplate' : 'js/Recievers/RecieverEditTemplate',
		'RecieversTemplateAdmin' : 'js/Recievers/RecieverTemplateAdmin',

		//router

		'Router' : 'js/Router',
		
		// Loader

		'loaderView' : 'js/loaderView'
	}
});

require(['jquery', 'backbone', 'loaderView', 'Router'], function($, Backbone, LoaderView, Router) {
	var router = new Router();
	Backbone.history.start({ pushState: true });
	if (document.readyState !== "complete") {
		$(window).load(function() {
			loaderView.remove();
		});
		var loaderView = new LoaderView();
	}
	
	

});

