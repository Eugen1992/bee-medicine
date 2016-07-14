const appDispathcer = require('./../../dispatcher.js');

class AddReceiver extends React.Component {
  onChange(event) {
    appDispathcer.dispatch({
      actionType: 'new-receiver-update',
      field: event.target.name,
      value: event.target.value
    });
  }
  submit() {
    appDispathcer.dispatch({
      actionType: 'new-receiver-save'
    });
  }
  render() {
    return(
      <div className="service-add-block service-extension">
        <h2>Добавить получателя</h2>
        <span className="service-headline">Имя</span><br/>
        <input type="text" name="name" className="service-extension-inputs" onChange={this.onChange.bind(this)} defaultValue={this.props.currentNewReceiver.name}/><br/>
        <span className="service-headline">Email</span><br/>
        <input type="text" name="address" className="service-extension-inputs" onChange={this.onChange.bind(this)} defaultValue={this.props.currentNewReceiver.address}/><br/>
        <button onClick={this.submit.bind(this)}>Добавить</button>
      </div>
    )
  }
}

module.exports = AddReceiver;