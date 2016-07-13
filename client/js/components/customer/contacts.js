const ContactItem = require('./contact-item.js');

class Contacts extends React.Component {
  render() {
    return (
      <div className="container js-footer">
        <div className="headline dark-style">Контакты</div>
        <div className="external-block dark-frame">
          {this.getListOfContacts()}
        </div>
      </div>
    )
  }
  getListOfContacts() {
    var list = [];
    if (this.props.contacts.data) {
      this.props.contacts.data.forEach(function (contact, index) {
        list.push(
          <ContactItem data={contact} key={index}/>
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
