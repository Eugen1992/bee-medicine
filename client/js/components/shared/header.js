const PopupButton = require('./popup-button');

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-text js-logo">
          КОДАЦКАЯ БАНЯ
        </div>
        <PopupButton
          colorTheme="light"
          bookingInfo={this.props.bookingInfo}/>
      </div>
    )
  }
}

module.exports = Header;
