var BookTimeModel = require('./BookTimeModel.js');

class BookTimeView extends React.Component({
  className: 'bookForm-background',
  defaults: {
    activeButtonClass: 'is-active',
    switchButtonSelector: '.js-switchForm',
    loadingClass: 'is-loading',
    errorClass: 'is-error',
    successClass: 'is-success'
  },
  events: {
    'click' 						: 'render',
    'click .js-cancel' 			: 'closeForm',
    'click .js-book-block'		: 'closeForm',
    'click .js-switchForm'    : 'switchForm'
  },
  closeForm: function(e) {
    this.remove();
  },
  initialize: function(options) {
    this.model = new BookTimeModel();
    this.initState = this.$el.data('state');
  },
  render: function() {
    var Form = React.createClass({
      submit: function () {
        console.log('hooray');
      },
      render: function() {
        return (
          <div className="bookForm-background">
        <div className=" bookForm">
        <span className="js-cancel bookForm-closeSign">X</span>
        <div className="bookForm-switcher">
        <button className="bookForm-switchButton js-switchForm is-active" data-switch-to="book"> Заказать услугу</button>
        {/*<button className="bookForm-switchButton js-switchForm" data-switch-to="ask"> Задать вопрос</button>*/}
        </div>
        <div className="bookForm-message bookForm-loading"> Минуту, мы уточняем не заняты ли пчелы...</div>
        <div className="bookForm-message bookForm-success"> Спасибо за Ваш заказ, мы скоро с вами свяжемся.</div>
        <div className="bookForm-message bookForm-error"> Произошла ошибка, попробуйте еще раз.</div>
        <div className="bookForm-form" data-form="book">
        <input type="text" className="js-form-name bookForm-input" placeholder="Введите ваше имя"/>
        <input type="text" required="true" className="js-form-phone bookForm-input" placeholder="Введите ваш номер телефона"/>
        <span className="bookForm-label"> Выберите дату и время </span>
        <div className="bookForm-inputWrapper">
        <span className="bookForm-inputLabel"> Число </span>
        <input className="js-form-day bookForm-input bookForm-input--small" name="day"   defaultValue="5" placeholder="Число" type="number"/>
        </div>
        <div className="bookForm-inputWrapper">
        <span className="bookForm-inputLabel"> Месяц </span>
        <select className="js-form-month bookForm-select bookForm-input--small" name="month" defaultValue="5" placeholder="Месяц" >
        <option value="1"> Январь </option>
        <option value="2"> Февраль </option>
        <option value="3"> Март </option>
        <option value="4"> Апрель </option>
        <option value="5"> Май </option>
        <option value="6"> Июнь </option>
        <option value="7"> Июль </option>
        <option value="8"> Август </option>
        <option value="9"> Сентябрь </option>
        <option value="10"> Октябрь </option>
        <option value="11"> Ноябрь </option>
        <option value="12"> Февраль </option>
        </select>
        <span className="bookForm-inputLabel"> Год </span>
        <select className="js-form-year bookForm-select bookForm-input--small" name="year" defaultValue="2016" placeholder="Год" >
        <option value="2016"> 2016 </option>
        <option value="2017"> 2017 </option>
        <option value="2018"> 2018 </option>
        </select>
        </div>
        <div className="bookForm-inputWrapper">
        <span className="bookForm-inputLabel"> Время начала (0 - 24) </span>
        <input className="js-form-time bookForm-select bookForm-input--small" name="time" type="number" defaultValue="20"/>
        </div>
        <button className="bookForm-submitButton" onClick={this.submit}>- Сделать заказ -</button>
        </div>
        </div>
        </div>
        );
      }
    });
    ReactDOM.render(
    <Form />,
      this.el
    );

    return this;
  },
  sendOrder: function() {
    var bookTimeModel = new BookTimeModel({
      customerName: this.$('.js-form-name').val(),
      customerPhone: this.$('.js-form-phone').val(),
      day: this.$('.js-form-day').val(),
      year: this.$('.js-form-year').val(),
      month: this.$('.js-form-month').val(),
      time: this.$('.js-form-time').val()
    });
    bookTimeModel.save(null, {
      error: this.showErrorMessage.bind(this),
      success: this.showSuccessMessage.bind(this)
    });
    this.showLoading();
  },
  showLoading: function() {
    this.$el.addClass(this.defaults.loadingClass);
  },
  showSuccessMessage: function () {
    this.$el.removeClass(this.defaults.loadingClass);
    this.$el.addClass(this.defaults.successClass);
  },
  showErrorMessage: function () {
    this.$el.removeClass(this.defaults.loadingClass);
    this.$el.addClass(this.defaults.errorClass);
  },
  switchForm: function (e) {
    var $button = $(e.target);
    var formToShow = $button.data('switchTo');

    this.$(this.defaults.switchButtonSelector).removeClass(this.defaults.activeButtonClass);
    $button.addClass(this.defaults.activeButtonClass);
  }
});

module.exports = BookTimeView;
