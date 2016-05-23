/*require.config({
	paths: {
		//libraries
    'text': 'libraries/text',
    'react' : 'libraries/react-with-addons',
    'reactDom' : 'libraries/react-dom',
    'JSXTransformer': 'libraries/JSXTransformer',
    'jsx': 'libraries/jsx',
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

		'ContactModel' : 'js/Contacts/ContactModel',
		'ContactViewCustomer' : 'js/Contacts/ContactViewCustomer',
		'ContactViewAdmin' : 'js/Contacts/ContactViewAdmin',
		'ContactsCollection' : 'js/Contacts/ContactsCollection',
		'ContactsCollectionViewCustomer' : 'js/Contacts/ContactsCollectionViewCustomer',
		'ContactsCollectionViewAdmin' : 'js/Contacts/ContactsCollectionViewAdmin',
		'ContactTemplate' : 'js/Contacts/Templates/ContactTemplate',
		'ContactCreateEditTemplate' : 'js/Contacts/Templates/ContactCreateEditTemplate',
        'ContactsCollectionAdminTemplate': 'js/Contacts/Templates/ContactsCollectionAdminTemplate',

		//book module


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
});*/

var Router = require('./js/Router.js');
var LoaderView = require('./js/LoaderView.js');

var router = new Router();
Backbone.history.start({ pushState: true });

if (document.readyState !== "complete") {
    var 	loaderView;

    $(window).load(function() {
        loaderView.remove();
    });
    loaderView = new LoaderView();
}
	

