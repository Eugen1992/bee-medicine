const ServicesStore = require('./../stores/services-store');
const ContactsStore = require('./../stores/contacts-store');
const ReceiversStore = require('./../stores/receivers-store');
const About = require('./customer/about');
const AboutServices = require('./customer/about-services');
const Services = require('./admin/services');
const Gallery = require('./customer/gallery');
const Contacts = require('./admin/contacts');
const Receivers = require('./admin/receivers');

class AdminContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
    ServicesStore.on('updated', this.updateServices.bind(this));
    ContactsStore.on('updated', this.updateContacts.bind(this));
    ReceiversStore.on('updated', this.updateReceivers.bind(this));
  }
  getState() {
    return {
      services: ServicesStore.getServices(),
      contacts: ContactsStore.getContacts(),
      receivers: ReceiversStore.getReceivers()
    }
  }
  updateServices() {
    this.setState({
      services: ServicesStore.getServices()
    });
  }
  updateContacts() {
    this.setState({
      contacts: ContactsStore.getContacts()
    });
  }
  updateReceivers() {
    this.setState({
      receivers: ReceiversStore.getReceivers()
    });
  }
  render() {
    return (
      <div className="content">
        <About/>
        <AboutServices/>
        <Services services = {this.state.services} />
        <Gallery/>
        <Contacts contacts = {this.state.contacts} />
        <Receivers receivers = {this.state.receivers} />
      </div>
    )
  }
}

module.exports = AdminContent;