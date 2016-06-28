const appDispathcer = require('./../../dispatcher.js');

class AddService extends React.Component {
  onChange(event) {
    appDispathcer.dispatch({
      actionType: 'new-service-update',
      field: event.target.name,
      value: event.target.value
    });
  }
  submit() {
    appDispathcer.dispatch({
      actionType: 'new-service-save'
    });
  }
  render() {
    return(
      <div class="service-add-block service-extension">
        <h2>Добавить услугу</h2>
        <span className="service-headline">Название </span><br/>
        <input type="text" name="name" className="service-extension-inputs" onChange={this.onChange.bind(this)} defaultValue={this.props.currentNewService.name}/><br/>
        <span className="service-headline">Цена </span><br/>
        <input type="number" name="price" className="service-extension-inputs" onChange={this.onChange.bind(this)} defaultValue={this.props.currentNewService.price}/><br/>
        <span className="service-headline">Описание </span><br/>
        <textarea name="description" className="service-extension-textarea" onChange={this.onChange.bind(this)} defaultValue={this.props.currentNewService.description}/><br/>
        <button onClick={this.submit.bind(this)}>Add service</button>
      </div>
    )
  }
}

module.exports = AddService;