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
    
module.exports = BookTimeModel;
