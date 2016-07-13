const ServicesStore = require('./../stores/services-store');
const ContactsStore = require('./../stores/contacts-store');
const BookTimeStore = require('./../stores/book-time-store');
const Header = require('./customer/header');
const About = require('./customer/about');
const AboutServices = require('./customer/about-services');
const Services = require('./customer/services');
const Gallery = require('./customer/gallery');
const Contacts = require('./customer/contacts');

class CustomerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
    ServicesStore.on('updated', this.updateServices.bind(this));
    BookTimeStore.on('updated', this.updateBooking.bind(this));
    ContactsStore.on('updated', this.updateContacts.bind(this));
  }
  getState() {
    return {
      services: ServicesStore.getServices(),
      booking: BookTimeStore.getBookingInfo(),
      contacts: ContactsStore.getContacts()
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
  updateContacts() {
    this.setState({
      contacts: ContactsStore.getContacts()
    })
  }
  render() {
    return (
      <div className="content">
        <Header bookingInfo = {this.state.booking} />
        <About/>
        <AboutServices/>
        <Services services = {this.state.services} />
        <Gallery/>
        <Contacts bookingInfo = {this.state.booking} contacts = {this.state.contacts} />
      </div>
    )
  }
}

module.exports = CustomerContent;