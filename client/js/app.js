const BookTimeStore = require('./stores/book-time-store');
const ServicesStore = require('./stores/services-store');
const PopupButton = require('./components/popup-button');
const Header = require('./components/header');
const About = require('./components/about');
const AboutServices = require('./components/about-services');
const Services = require('./components/services');
const Gallery = require('./components/gallery');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
    ServicesStore.on('updated', this.updateServices.bind(this));
    BookTimeStore.on('updated', this.updateServices.bind(this));
  }
  getState() {
    return {
      services: ServicesStore.getServices(),
      booking: BookTimeStore.getBookingInfo()
    }
  }
  updateServices() {
    this.setState({
      services: ServicesStore.getServices()
    })
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
      <About/>
      <AboutServices/>
      <Services servicesInfo = {this.state.services} />
      <Gallery/>
      <div className="container js-footer">
        <div className="headline dark-style">Контакты</div>
        <div className="external-block dark-frame">
          <PopupButton
            colorTheme="dark"
            bookingInfo = {this.state.booking}/>
        </div>
      </div>
    </div>
    )
  }
}

module.exports = App;