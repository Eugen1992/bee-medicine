const appDispathcer = require('./../../dispatcher.js');

class ContactItem extends React.Component {
  render() {
    return(
      <div>
        <span>{this.props.data.name}: </span>
        <span>{this.props.data.value}</span><br/>
      </div>
    )
  }
}

module.exports = ContactItem;