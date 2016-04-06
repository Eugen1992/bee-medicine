define(['underscore'], function(_) {
	var contactTemplate = _.template(['Адрес: <br><%= adress %><br><br>',
											'Телефон: <%= phone %><br><br>',
											'Email: <br><%= email %><br>',
                                            '<% if (mode === "admin") { %>',
                                              '<button class="js-edit">Edit</button>',
                                              '<button class="js-delete">Delete</button>',
                                           '<% } %>'].join(" "));
	return contactTemplate;
});