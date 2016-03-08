define(['jquery', 'underscore', 
		'backbone', 'ServCollection', 'ServViewCust', 
		'ServTemplCustomer'], function($, _, Backbone, ServiceCollection, ServiceViewCustomer) {	
	var ServiceCollectionViewCustomer = Backbone.View.extend({
		tagName: 'div',
		initialize: function() {
			this.collection = new ServiceCollection();
			this.collection.on('sync', this.render, this)
			this.collection.fetch();
		},
		render: function () {
			
			this.collection.each(function (service) {
				var serviceViewCustomer = new ServiceViewCustomer({ model: service });
				this.$el.append(serviceViewCustomer.el);
			}, this );

			$(window).scroll(function() {
				var w3scroll = $(this).scrollTop();
				$('.js-service').each(function() {
					if (w3scroll > $(this).offset().top - ($(window).height()/12)) {
						$(this).addClass('show-offer');
					}
				});
			});
		}
	});
	
	return ServiceCollectionViewCustomer;
});


