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
  render() {
    return(
      <div className="contact-btn contact-btn-top" data-state="book">
        <div onClick={this.showPopup.bind(this)}>Заказать услугу</div>
        {
          this.state.isOpened
            ? <BookTimeView />
            : null
        }
      </div>
    )
  }
}

module.exports = PopupButton;
