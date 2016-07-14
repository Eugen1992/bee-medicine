const appDispathcer = require('./../../dispatcher.js');

class ReceiverItem extends React.Component {
  deleteItem() {
    appDispathcer.dispatch({
      actionType: 'receiver-delete',
      receiver: this.props.data
    });
  }
  editItem(event) {
    appDispathcer.dispatch({
      actionType: 'receiver-edit',
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
        <span className="service-headline">Имя</span> <br/>
        <input name="name" className="service-headline" onChange={this.editItem.bind(this)} defaultValue={this.props.data.name}/><br/>
        <span className="service-headline">Почта</span> <br/>
        <input name="address" className="service-headline" onChange={this.editItem.bind(this)} defaultValue={this.props.data.address}/><br/>
        <button className="service-adminButton" onClick={this.deleteItem.bind(this)}>Удалить</button>
      </div>
    )
  }
}

module.exports = ReceiverItem;