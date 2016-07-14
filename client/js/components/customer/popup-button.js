const BookTimeView = require('./book-time-popup');

class PopupButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isOpened: false
    };
  }
  showPopup() {
    this.setState({isOpened: true});
  }
  closePopup() {
    this.setState({isOpened: false});
  }
  render() {
    return(
      <div className="contact" >
        <div className={"contact-btn contact-btn-" + this.props.colorTheme}
             onClick={this.showPopup.bind(this)}>Заказать услугу</div>
        {
          this.state.isOpened
            ? <BookTimeView
              bookingInProcess = {this.props.bookingInfo.bookingInProcess}
              validState = {this.props.bookingInfo.validState}
              onClose = {this.closePopup.bind(this)}/>
            : null
        }
      </div>
    )
  }
}

module.exports = PopupButton;
