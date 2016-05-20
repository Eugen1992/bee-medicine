define(['backbone'], function(Backbone) {
	var BookTimeModel = Backbone.Model.extend({
      defaults: {
        customerName: '',
        customerPhone: '',
        day: '',
        year: '',
        month: '',
        time: ''
      },
      url: '/contact/booktime'
    });
    
	return BookTimeModel;
});