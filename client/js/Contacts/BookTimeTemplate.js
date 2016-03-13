define(['underscore'], function(_) {	
	var bookTimeTemplate = _.template([
      '<div class="js-book-block registration-form-block">',
        '<div class="js-book-form active-form-part">',
            '<input type="text" class="js-form-name contact-inputs" placeholder="Введите ваше имя"><br>',
            '<input type="text" class="js-form-phone contact-inputs" placeholder="Введите ваш номер телефона"><br>',
            '<textarea class="js-form-comments contact-area" placeholder="Коментарии и пожелания к заказу"></textarea><br>',
            '<input class="js-form-date contact-form-date" name="date" type="date"/>',
            '<button class="js-send reg-form-btns">Сделать заказ</button>',
            '<button class="js-cancel reg-form-btns">Выйти</button>',
        '</div>',
      '</div>'].join(' '));
	return bookTimeTemplate;
});