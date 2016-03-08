define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

	var LoaderView = Backbone.View.extend({
		tagName: 'div',
		className: 'loader-block',
		loader: _.template('<div class="loader"></div>'),
		initialize: function() {
			this.render();
		},
		render: function() {
			$('.main').append(this.$el.html(this.loader));
		}
	});

	return LoaderView;
});