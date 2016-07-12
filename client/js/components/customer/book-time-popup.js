const appDispathcer = require('./../../dispatcher.js');

class BookTimeView extends React.Component {
  onChange(event) {
    appDispathcer.dispatch({
      actionType: 'booking-time-update',
      field: event.target.name,
      value: event.target.value
    });
  }
  submit() {
    appDispathcer.dispatch({
      actionType: 'booking-time-save'
    });
  }
  stopPropagation(e) {
    e.stopPropagation();
  }
  render() {
    return (
    <div className="bookForm-background" onClick={this.props.onClose}>
      <div className="bookForm" onClick={this.stopPropagation.bind(this)}>
        <span className="bookForm-closeSign" onClick={this.props.onClose}>X</span>
        <div className="bookForm-switcher">
          <button className="bookForm-switchButton js-switchForm is-active" data-switch-to="book">Заказать услугу</button>
          {/*<button className="bookForm-switchButton js-switchForm" data-switch-to="ask"> Задать вопрос</button>*/}
        </div>
        <div className="bookForm-message bookForm-loading"> Минуту, мы уточняем не заняты ли пчелы...</div>
        <div className="bookForm-message bookForm-success"> Спасибо за Ваш заказ, мы скоро с вами свяжемся.</div>
        <div className="bookForm-message bookForm-error"> Произошла ошибка, попробуйте еще раз.</div>
        <div className="bookForm-form" data-form="book">
          <input name="customerName" type="text" className="bookForm-input" onChange={this.onChange.bind(this)} placeholder="Введите ваше имя" defaultValue={this.props.bookingInProcess.customerName}/>
          <input name="customerPhone" type="text" className="js-form-phone bookForm-input" onChange={this.onChange.bind(this)} placeholder="Введите ваш номер телефона" defaultValue={this.props.bookingInProcess.customerPhone}/>
          <span className="bookForm-label"> Выберите дату и время </span>
          <div className="bookForm-inputWrapper">
            <span className="bookForm-inputLabel"> Число </span>
            <input name="day" className="js-form-day bookForm-input bookForm-input--small" onChange={this.onChange.bind(this)} defaultValue={this.props.bookingInProcess.day} placeholder="Число" type="number"/>
          </div>
          <div className="bookForm-inputWrapper">
            <span className="bookForm-inputLabel"> Месяц </span>
            <select className="js-form-month bookForm-select bookForm-input--small" name="month" defaultValue={this.props.bookingInProcess.month} placeholder="Месяц" >
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
            <select className="js-form-year bookForm-select bookForm-input--small" name="year" defaultValue={this.props.bookingInProcess.year} placeholder="Год" >
            <option value="2016"> 2016 </option>
            <option value="2017"> 2017 </option>
            <option value="2018"> 2018 </option>
            </select>
          </div>
          <div className="bookForm-inputWrapper">
            <span className="bookForm-inputLabel"> Время начала (0 - 24) </span>
            <input className="js-form-time bookForm-select bookForm-input--small" name="time" type="number" defaultValue={this.props.bookingInProcess.time}/>
          </div>
          <button className="bookForm-submitButton" onClick={this.submit.bind(this)}>- Сделать заказ -</button>
        </div>
      </div>
    </div>
    );
  }s
}

module.exports = BookTimeView;
