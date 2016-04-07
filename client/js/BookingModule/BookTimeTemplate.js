define(['underscore'], function(_) {	
	var bookTimeTemplate = _.template([
      '<div class="bookForm-background">',
        '<div class="js-book-form bookForm">',
            '<span class="js-cancel bookForm-closeSign">X</span>',
            '<div class="bookForm-switcher">',
              '<button class="bookForm-switchButton js-switchForm" data-switch-to="book"> Заказать услугу</button>',
              //'<button class="bookForm-switchButton js-switchForm" data-switch-to="ask"> Задать вопрос</button>',
            '</div>',
            '<div class="bookForm-message bookForm-loading"> Минуту, мы уточняем не заняты ли пчелы...</div>',
            '<div class="bookForm-message bookForm-success"> Спасибо за Ваш заказ, мы скоро с вами свяжемся.</div>',
            '<div class="bookForm-message bookForm-error"> Произошла ошибка, попробуйте еще раз.</div>',
            '<div class="bookForm-form" data-form="book">',
              '<input type="text" class="js-form-name bookForm-input" placeholder="Введите ваше имя">',
              '<input type="text" required="true" class="js-form-phone bookForm-input" placeholder="Введите ваш номер телефона"/>',
              '<span class="bookForm-label"> Выберите дату и время </span>',
              '<div class="bookForm-inputWrapper">',
                '<span class="bookForm-inputLabel"> Число </span>',
                '<input class="js-form-day bookForm-input bookForm-input--small" name="day"  placeholder="Число" type="number"/>',
              '</div>',
              '<div class="bookForm-inputWrapper">',
                '<span class="bookForm-inputLabel"> Месяц </span>',
                '<select class="js-form-month bookForm-select bookForm-input--small" name="month"  placeholder="Месяц" >',
                  '<option value="1"> Январь </option>',
                  '<option value="2"> Февраль </option>',  
                  '<option value="3"> Март </option>',
                  '<option value="4"> Апрель </option>',
                  '<option value="5" selected="selected"> Май </option>',
                  '<option value="6"> Июнь </option>',  
                  '<option value="7"> Июль </option>', 
                  '<option value="8"> Август </option>',
                  '<option value="9"> Сентябрь </option>',
                  '<option value="10"> Октябрь </option>',  
                  '<option value="11"> Ноябрь </option>',
                  '<option value="12"> Февраль </option>',
                '</select>',
                '<span class="bookForm-inputLabel"> Год </span>',
                '<select class="js-form-year bookForm-select bookForm-input--small" name="year"  placeholder="Год" >',
                  '<option value="2016" selected="selected"> 2016 </option>',
                  '<option value="2017"> 2017 </option>',  
                  '<option value="2018"> 2018 </option>',
                '</select>',
                '</div>',
                '<div class="bookForm-inputWrapper">',
                  '<span class="bookForm-inputLabel"> Время начала (0 - 24) </span>',
                  '<input class="js-form-time bookForm-select bookForm-input--small" name="time" type="number" value="20"/>',
                '</div>',
              '<button class="js-send bookForm-submitButton">- Сделать заказ -</button>',
          '</div>',        
        '</div>',
      '</div>'].join(' '));
	return bookTimeTemplate;
});