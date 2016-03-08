define(['jquery', 'underscore', 'backbone', 
	'RecieversCollection', 'RecieversAddTemplate', 
	'RecieverModel', 'RecieversViewAdmin'], function($, _, Backbone, ReceiversCollection, receiverAddTemplate, Reciever, RecieverViewAdmin) {	
	var RecieversCollectionViewAdmin = Backbone.View.extend({
		tagName: 'div',
		className: 'admin-block',
		addTemplate: receiverAddTemplate,

		initialize: function() {
			this.collection = new ReceiversCollection();
			this.collection.on('sync', this.render, this);
			this.collection.fetch();
			this.$el.on('add', this.addReciever, this);
			this.on('change', this.render, this);
		},
		events: {
			'click .js-add-reciever' : 'addReciever'	
		},
		addReciever: function() {
			var reciever = this.collection.create({
				recieverAdress: $('.js-add-new-receiver').val()
			});
			this.resetInput();
			var recieverViewAdmin = new RecieverViewAdmin({model: reciever});
			this.$el.append(recieverViewAdmin.el);
		},
		resetInput: function() {
			$('.js-add-new-receiver').val('');
		},
		render: function() {
			this.$el.html(this.addTemplate(this.collection.toJSON()));
			this.collection.each(function(reciever) {
				var recieverViewAdmin = new RecieverViewAdmin({model: reciever});
				this.$el.append(recieverViewAdmin.el);
			}, this);
			$('.js-contact-block').append(this.$el);
		}
	});

	return RecieversCollectionViewAdmin;
});