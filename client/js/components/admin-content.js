const ServicesStore = require('./../stores/services-store');
const ContactsStore = require('./../stores/contacts-store');
const About = require('./customer/about');
const AboutServices = require('./customer/about-services');
const Services = require('./admin/services');
const Gallery = require('./customer/gallery');
const Contacts = require('./admin/contacts');

class AdminContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
    ServicesStore.on('updated', this.updateServices.bind(this));
    ContactsStore.on('updated', this.updateContacts.bind(this));
  }
  getState() {
    return {
      services: ServicesStore.getServices(),
      contacts: ContactsStore.getContacts()
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
  render() {
    return (
      <div className="content">
        <About/>
        <AboutServices/>
        <Services services = {this.state.services} />
        <Gallery/>
        <Contacts contacts = {this.state.contacts} />
      </div>
    )
  }
}

module.exports = AdminContent;