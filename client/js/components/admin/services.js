const AddService = require('./add-service');
const ServiceItem = require('./service-item');

class Services extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="headline dark-style">Сон на ульях</div>
        <div className="external-block dark-frame">
          {this.getListOfServices()}
          <AddService currentNewService = {this.props.services.currentNewService}/>
        </div>
      </div>
    )
  }
  getListOfServices() {
    var list = [];
    
    if (this.props.services.data) {
      this.props.services.data.forEach(function (service, index) {
        list.push(
          <ServiceItem data={service} key={index}/>
        );
      });
    } else {
      list.push(
          <span className="service-headline" key="no-service">Пока что услуг нет.</span>
      )
    }

    return list;
  }
}

module.exports = Services;