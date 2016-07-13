const appDispathcer = require('./../../dispatcher.js');

class ContactItem extends React.Component {
  deleteItem() {
    appDispathcer.dispatch({
      actionType: 'contact-delete',
      contact: this.props.data
    });
  }
  editItem(event) {
    appDispathcer.dispatch({
      actionType: 'contact-edit',
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
        <span className="service-headline">Значение</span> <br/>
        <input name="value" className="sub-headline" onChange={this.editItem.bind(this)} defaultValue={this.props.data.value}/>грн<br/>
        <button className="service-adminButton" onClick={this.deleteItem.bind(this)}>Удалить</button>
      </div>
    )
  }
}

module.exports = ContactItem;