const AddService = require('./add-service');

class Services extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="headline dark-style">Сон на ульях</div>
        <div className="external-block dark-frame">
          {this.getListOfServices()}
          <AddService/>
        </div>
      </div>
    )
  }
  getListOfServices() {
    var list = [];
    if (this.props.servicesInfo.data) {
      this.props.servicesInfo.data.forEach(function (service, index) {
        list.push(
          <div key={index}>
            <span><img src="../images/clock2.png" alt="service logo"/></span><br/>
            <span class="service-headline">{service.serviceName}</span> <br/>
            <span class="sub-headline">{service.price}грн</span><br/>
            <span class="descriptionCustom">{service.description}</span><br/>
          </div>
        );
      });
    } else {
      list.push(
          <span class="service-headline" key="no-service">Пока что услуг нет.</span>
      )
    }

    return list;
  }
}

module.exports = Services;