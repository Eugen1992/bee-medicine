const appDispathcer = require('./../../dispatcher.js');

class AddContact extends React.Component {
  onChange(event) {
    appDispathcer.dispatch({
      actionType: 'new-contact-update',
      field: event.target.name,
      value: event.target.value
    });
  }
  submit() {
    appDispathcer.dispatch({
      actionType: 'new-contact-save'
    });
  }
  render() {
    return(
      <div className="service-add-block service-extension">
        <h2>Добавить способ контакта</h2>
        <span className="service-headline">Имя </span><br/>
        <input type="text" name="name" className="service-extension-inputs" onChange={this.onChange.bind(this)} defaultValue={this.props.currentNewContact.name}/><br/>
        <span className="service-headline">Значение </span><br/>
        <input type="number" name="value" className="service-extension-inputs" onChange={this.onChange.bind(this)} defaultValue={this.props.currentNewContact.value}/><br/>
        <button onClick={this.submit.bind(this)}>Добавить</button>
      </div>
    )
  }
}

module.exports = AddContact;