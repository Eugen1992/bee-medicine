define(['jquery', 'underscore', 'backbone', 'RecieversTemplateAdmin', 'RecieversEditTemplate'], function($, _, Backbone, recieverTemplateAdmin, recieverEditTemplate) {
	var RecieverViewAdmin = Backbone.View.extend({
		tagName: 'div',
		displayTemplate	:  recieverTemplateAdmin,
		editTemplate    :  recieverEditTemplate,

		initialize: function() {
			this.on('destroy', this.render, this);
			this.render();
		},
		render: function() {
			this.$el.html(this.displayTemplate(this.model.toJSON()));
			return this;
		},
		events: {
			'click .js-edit' : 'editReciever',
			'click .js-delete': 'deleteReciever',
			'click .js-update' : 'updateReciever',
			'click .js-cancel' : 'cancel'
		},
		editReciever: function() {
			this.$el.html(this.editTemplate(this.model.toJSON()));
		},
		deleteReciever: function() {
			this.remove();
			this.model.destroy();
		},

		updateReciever:function() {
			this.model.set('recieverAdress', this.$('.js-edit-reciever').val());
			this.model.save();
			this.render();
		},
		cancel: function() {
			var self = this;
			self.render();
		},
	});

	return RecieverViewAdmin;
});	