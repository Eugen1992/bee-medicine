const BookTimeStore = require('./stores/book-time-store');
const Header = require('./components/shared/header');
const Footer = require('./components/shared/footer');

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
    BookTimeStore.on('updated', this.updateBooking.bind(this));
  }
  getState() {
    return {
      booking: BookTimeStore.getBookingInfo()
    }
  }
  updateBooking() {
    this.setState({
      booking: BookTimeStore.getBookingInfo()
    })
  }
  render() {
    return (
      <div className="main">
        <Header bookingInfo = {this.state.booking} />
        {this.props.children}
        <Footer bookingInfo = {this.state.booking} />
      </div>
    )
  }
}

module.exports = Layout;