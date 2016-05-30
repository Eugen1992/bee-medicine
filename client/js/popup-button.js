var BookTimeView = require('./BookingModule').View;

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
      <div className="contact"> 
        <div className="contact-btn contact-btn-top" onClick={this.showPopup.bind(this)}>Заказать услугу</div>
        {
          this.state.isOpened
            ? <BookTimeView onClose = {this.closePopup.bind(this)}/>
            : null
        }
      </div>
    )
  }
}

module.exports = PopupButton;
