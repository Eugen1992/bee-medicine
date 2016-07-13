const AddContact = require('./add-contact.js');
const ContactItem = require('./contact-item.js');

class Contacts extends React.Component {
  render() {
    return (
      <div className="container js-footer">
        <div className="headline dark-style">Контакты</div>
        <div className="external-block dark-frame">
          {this.getListOfContacts()}
          <AddContact currentNewContact = {this.props.contacts.currentNewContact}/>
        </div>
      </div>
    )
  }
  getListOfContacts() {
    var list = [];
    if (this.props.contacts.data) {
      this.props.contacts.data.forEach(function (service, index) {
        list.push(
          <ContactItem data={service} key={index}/>
        );
      });
    } else {
      list.push(
        <span className="service-headline" key="no-service">Пока что контактов нет.</span>
      )
    }

    return list;
  }
}

module.exports = Contacts;
