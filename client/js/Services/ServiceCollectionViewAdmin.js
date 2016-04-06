define(['jquery', 'underscore', 
		'backbone', 'ServCollection', 'ServAddTempl', 
		'ServModel', 'ServViewAdm', 'backbone-mediator'], function($, _, Backbone, ServiceCollection, serviceAddTemplate, Service, ServiceViewAdmin) {	
	var ServiceCollectionViewAdmin = Backbone.View.extend({
		tagName: 'div',
		addTemplate: serviceAddTemplate,

		events: {
			'click .js-add' 		 : 'addService',
			'click .js-view-all'	 : 'returnToCustomer'	
		},

		initialize: function() {
			this.$el.html(this.addTemplate);
			this.collection = new ServiceCollection();
			this.collection.once('sync', this.render, this);
			this.collection.fetch();
			this.on('change', this.render, this);
		},
		returnToCustomer: function() {
			Backbone.Mediator.publish('navigate', '/', {trigger: true});
		},
		addService: function() {
			var service = this.collection.create ({
				serviceName: $('.js-add-new-service-name').val(),
				price: $('.js-add-new-service-pric').val(),
				description: $('.js-add-new-service-description').val()
			});
			var serviceViewAdmin = new ServiceViewAdmin({model: service});
			this.$el.append(serviceViewAdmin.el);
			this.resetInputs();
		},
		resetInputs: function() {
			$('.js-add-new-service-name').val('');
			$('.js-add-new-service-price').val('');
			$('.js-add-new-service-description').val('');
		},
		render: function() {
            this.$('.js-serviceContainer').remove();
			this.collection.each(function(service) {
				var serviceViewAdmin = new ServiceViewAdmin({model: service});
				this.$el.append(serviceViewAdmin.el);
			}, this);
		}
	});

	return ServiceCollectionViewAdmin;
});