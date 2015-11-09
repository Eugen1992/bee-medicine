define(['underscore'], function(_) {
	var serviceDepictTemplate = _.template(['<span><img src="../images/clock2.png" alt="service logo" /></span><br>',
									'<span class="service-headline"><%= serviceName %></span> <br>',
									'<span class="sub-headline"> <%= price %> грн</span><br>',
									'<span class="descriptionCustom"><%= description %></span><br>'].join(' '));
	return serviceDepictTemplate;
});

