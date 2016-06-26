const BookTimeStore = require('./stores/book-time-store');
const PopupButton = require('./components/popup-button');
const Header = require('./components/header');
const About = require('./components/about');
const AboutServices = require('./components/about-services');
const Services = require('./components/about-services');
const Gallery = require('./components/gallery');

class App extends React.Component {
  getBookingInfo() {
    return {
      bookingInProcess: BookTimeStore.getBookingInProcess()
    }
  }
  render() {
    return (
    <div className="main">
      <Header bookingInfo = {this.getBookingInfo()} />
      <About/>
      <AboutServices/>
      <Services/>
      <Gallery/>

      <div className="container js-footer">
        <div className="headline dark-style">Контакты</div>
        <div className="external-block dark-frame">
          <PopupButton
            colorTheme="dark"
            bookingInfo = {this.getBookingInfo()}/>
        </div>
      </div>
    </div>
    )
  }
}

module.exports = App;