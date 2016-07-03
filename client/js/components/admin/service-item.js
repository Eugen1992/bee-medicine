const appDispathcer = require('./../../dispatcher.js');

class ServiceItem extends React.Component {
  deleteItem() {
    appDispathcer.dispatch({
      actionType: 'service-delete',
      service: this.props.data
    });
  }
  editItem() {
    appDispathcer.dispatch({
      actionType: 'service-edit',
      service: this.props.data
    });
  }
  render() {
    return(
      <div>
        <span><img src="../images/clock2.png" alt="service logo"/></span><br/>
        
        <span className="service-headline">Название</span> <br/>
        <input className="service-headline" onChange={this.editItem.bind(this)} defaultValue={this.props.data.serviceName}/><br/>
        <span className="sub-headline">{this.props.data.price}грн</span><br/>
        <span className="descriptionCustom">{this.props.data.description}</span><br/>
        <button onClick={this.deleteItem.bind(this)}>Delete</button>
      </div>
    )
  }
}

module.exports = ServiceItem;