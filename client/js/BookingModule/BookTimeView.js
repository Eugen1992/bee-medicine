define(['jquery', 'underscore', 'backbone', 'BookTimeModel', 'BookTimeTemplate'], function($, _, Backbone, BookTimeModel, bookTimeTemplate, RegistrationFormModel) {	
	var BookTimeView = Backbone.View.extend({
		popUpDiv: bookTimeTemplate,
		events: {
			'click' 						: 'render',
			'click .js-cancel' 				: 'closeForm', 
			'click .js-send' 				: 'sendOrder',
			'click .js-book-form' 			: 'prvntPr',
			'click .js-book-block'			: 'closeForm'
		},
		closeForm: function(e) {
			e.stopPropagation();
			$('.js-book-block').remove();
		},
		initialize: function() {
			this.model = new BookTimeModel();
		},
		render: function() {
			this.$el.append(this.popUpDiv);
		},
		sendOrder: function() {
			var form = new RegistrationFormModel({
				customerName: $('.js-form-name').val(),
				customerPhone: $('.js-form-phone').val(),
				dateOfProcedure: $('.js-form-date').val(),
				customerComments: $('.js-form-comments').val()				
			});
			form.save();
			this.resetInputs();
		},
		resetInputs: function() {
			$('.js-book-name').val('');
			$('.js-book-phone').val('');
			$('.js-comments').val('');
		},
		prvntPr: function(e) {
			e.stopPropagation();
		}
	});

	return BookTimeView;
});