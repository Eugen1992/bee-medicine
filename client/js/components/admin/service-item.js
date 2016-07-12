const appDispathcer = require('./../../dispatcher.js');

class ServiceItem extends React.Component {
  deleteItem() {
    appDispathcer.dispatch({
      actionType: 'service-delete',
      service: this.props.data
    });
  }
  editItem(event) {
    appDispathcer.dispatch({
      actionType: 'service-edit',
      data: {
        _id: this.props.data._id,
        field: event.target.name,
        value: event.target.value
      }
    });
  }
  render() {
    return(
      <div>
        <span><img src="../images/clock2.png" alt="service logo"/></span><br/>
        
        <span className="service-headline">Название</span> <br/>
        <input name="name" className="service-headline" onChange={this.editItem.bind(this)} defaultValue={this.props.data.name}/><br/>
        <span className="service-headline">Цена</span> <br/>
        <input name="price" className="sub-headline" onChange={this.editItem.bind(this)} defaultValue={this.props.data.price}/>грн<br/>
        <span className="service-headline">Описание</span> <br/>
        <input name="description" className="descriptionCustom" onChange={this.editItem.bind(this)} defaultValue={this.props.data.description}/><br/>
        <button className="service-adminButton" onClick={this.deleteItem.bind(this)}>Удалить</button>
      </div>
    )
  }
}

module.exports = ServiceItem;