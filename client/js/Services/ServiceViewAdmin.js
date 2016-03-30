define(['jquery', 'underscore', 
		'backbone', 'ServTemplAdmin', 
		'ServEditTempl'], function($, _, Backbone, serviceTemplateAdmin, serviceEditTemplate) {
	var ServiceViewAdmin = Backbone.View.extend({
		className: 'admin-block',
		displayTemplate	:  serviceTemplateAdmin,
		editTemplate    :  serviceEditTemplate,
		events: {
			'click .js-edit' : 'editService',
			'click .js-delete': 'deleteService',
			'click .js-update' : 'updateService',
			'click .js-cancel' : 'cancel',
            'click .js-getOne': 'getOne'
		},
		initialize: function() {
			this.render();
		},
		render: function() {
			this.$el.html(this.displayTemplate(this.model.toJSON()));
			return this;
		},
		editService: function() {
			this.$el.html(this.editTemplate(this.model.toJSON()));
		},
		deleteService: function() {
			this.remove();
			this.model.destroy();
		},
        getOne: function () {
          this.model.fetch();
        },
		updateService:function() {
			this.model.set({ 	
							'serviceName': this.$('.js-edit-service').val(),
							'price': this.$('.js-edit-price').val(),
							'description': this.$('.js-edit-description').val()
							});
			this.model.save();
			this.render();
		},
		cancel: function() {
			var self = this;
			self.render();
		},
	});

	return ServiceViewAdmin;
});