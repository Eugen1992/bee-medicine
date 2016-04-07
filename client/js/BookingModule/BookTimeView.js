define(['jquery', 'underscore', 'backbone', 'BookTimeModel', 'BookTimeTemplate'], function($, _, Backbone, BookTimeModel, bookTimeTemplate, RegistrationFormModel) {	
  var BookTimeView = Backbone.View.extend({
    template: bookTimeTemplate,
    className: 'bookForm-background',
    defaults: {
      activeButtonClass: 'is-active',
      switchButtonSelector: '.js-switchForm',
      loadingClass: 'is-loading',
      errorClass: 'is-error',
      successClass: 'is-success'
    },
    events: {
      'click' 						: 'render',
      'click .js-cancel' 			: 'closeForm', 
      'click .js-send' 				: 'sendOrder',
      'click .js-book-form' 		: 'prvntPr',
      'click .js-book-block'		: 'closeForm',
      'click .js-switchForm'        : 'switchForm'
    },
    closeForm: function(e) {
      this.remove();
    },
    initialize: function(options) {
      this.model = new BookTimeModel();
      this.initState = this.$el.data('state');
    },
    render: function() {
      this.$el.html(this.template);

      this.$(this.defaults.switchButtonSelector + '[data-switch-to="' + this.initState+ '"]').addClass(this.defaults.activeButtonClass);
      
      return this;
    },
    sendOrder: function() {
      var bookTimeModel = new BookTimeModel({
          customerName: this.$('.js-form-name').val(),
          customerPhone: this.$('.js-form-phone').val(),
          day: this.$('.js-form-day').val(),
          year: this.$('.js-form-year').val(),
          month: this.$('.js-form-month').val(),
          time: this.$('.js-form-time').val()
      });
      bookTimeModel.save(null, {
        error: this.showErrorMessage.bind(this),
        success: this.showSuccessMessage.bind(this)
      });
      this.showLoading();
    },
    showLoading: function() {
      this.$el.addClass(this.defaults.loadingClass);
    },
    showSuccessMessage: function () {
      this.$el.removeClass(this.defaults.loadingClass);
      this.$el.addClass(this.defaults.successClass);
    },
    showErrorMessage: function () {
      this.$el.removeClass(this.defaults.loadingClass);
      this.$el.addClass(this.defaults.errorClass);
    },
    switchForm: function (e) {
      var $button = $(e.target);
      var formToShow = $button.data('switchTo');
      
      this.$(this.defaults.switchButtonSelector).removeClass(this.defaults.activeButtonClass);
      $button.addClass(this.defaults.activeButtonClass);
    },
    prvntPr: function(e) {
      e.stopPropagation();
    }
  });

  return BookTimeView;
});