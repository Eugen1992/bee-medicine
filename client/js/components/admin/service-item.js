const appDispathcer = require('./../../dispatcher.js');

class ServiceItem extends React.Component {
  deleteItem() {
    appDispathcer.dispatch({
      actionType: 'service-delete',
      service: this.props.data
    });
  }
  render() {
    return(
      <div>
        <span><img src="../images/clock2.png" alt="service logo"/></span><br/>
        <span class="service-headline">{this.props.data.serviceName}</span> <br/>
        <span class="sub-headline">{this.props.data.price}грн</span><br/>
        <span class="descriptionCustom">{this.props.data.description}</span><br/>
        <button onClick={this.deleteItem.bind(this)}>Delete</button>
      </div>
    )
  }
}

module.exports = ServiceItem;