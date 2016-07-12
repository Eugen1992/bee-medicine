class Services extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="headline dark-style">Сон на ульях</div>
        {this.getListOfServices()}
      </div>
    )
  }
  getListOfServices() {
    var list = [];

    if (this.props.services.data) {
      this.props.services.data.forEach(function (service, index) {
        list.push(
          <div className="external-block dark-frame" key={index}>
            <span><img src="../images/clock2.png" alt="service logo" /></span><br/>
            <span class="service-headline">{service.name}</span> <br/>
            <span class="sub-headline">{service.price}грн</span><br/>
            <span class="descriptionCustom">{service.description}</span><br/>
          </div>
        );
      });
    } else {
      list.push(
        <div className="external-block dark-frame" key="index">
          <span class="service-headline">Пока что услуг нет.</span> <br/>
        </div>
      )
    }


    return list;
  }
}

module.exports = Services;