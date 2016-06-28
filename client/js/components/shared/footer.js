const PopupButton = require('./popup-button');

class Header extends React.Component {
  render() {
    return (
    <div className="container js-footer">
      <div className="headline dark-style">Контакты</div>
      <div className="external-block dark-frame">
        <PopupButton
          colorTheme="dark"
          bookingInfo={this.props.bookingInfo}/>
      </div>
    </div>
    )
  }
}

module.exports = Header;
