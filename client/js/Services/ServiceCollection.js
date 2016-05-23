var Service = require('./ServiceModel.js');
var ServiceCollection = Backbone.Collection.extend({
  idAttribute: '_id',
  model: Service,
  url: '/services'
});
	
module.exports = ServiceCollection;