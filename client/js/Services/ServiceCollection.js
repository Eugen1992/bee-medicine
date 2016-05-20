var ServiceCollection = Backbone.Collection.extend({
  idAttribute: '_id',
  //model: Service,
  url: '/services',
  initialize: function () {
    console.log('collection');
  }
});
	
module.expprts = ServiceCollection;