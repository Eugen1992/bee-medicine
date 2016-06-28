const ServicesStore = require('./../stores/services-store');
const About = require('./customer/about');
const AboutServices = require('./customer/about-services');
const Services = require('./customer/services');
const Gallery = require('./customer/gallery');

class CustomerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
    ServicesStore.on('updated', this.updateServices.bind(this));
  }
  getState() {
    return {
      services: ServicesStore.getServices()
    }
  }
  updateServices() {
    this.setState({
      services: ServicesStore.getServices()
    })
  }
  render() {
    return (
      <div className="content">
        <About/>
        <AboutServices/>
        <Services servicesInfo = {this.state.services} />
        <Gallery/>
      </div>
    )
  }
}

module.exports = CustomerContent;