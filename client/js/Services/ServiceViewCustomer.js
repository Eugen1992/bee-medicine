ServiceTemplate = require('./ServiceTemplateCustomer.js');
var ServiceViewCustomer = Backbone.View.extend({
  template: ServiceTemplate,
  tagName: 'div',
  className: 'js-service offer container',

  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = ServiceViewCustomer;
