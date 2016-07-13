const AddContact = require('./add-contact.js');

class Contacts extends React.Component {
  render() {
    return (
      <div className="container js-footer">
        <div className="headline dark-style">Контакты</div>
        <div className="external-block dark-frame">
          <AddContact currentNewContact = {this.props.contacts.currentNewContact}/>
        </div>
      </div>
    )
  }
}

module.exports = Contacts;
