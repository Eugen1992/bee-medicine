const AddReceiver = require('./add-receiver.js');
//const ReceiverItem = require('./receiver-item.js');

class Receivers extends React.Component {
  render() {
    return (
      <div className="container js-footer">
        <div className="headline dark-style">Список получателей уведомлений</div>
        <div className="external-block dark-frame">
          {/*{this.getListOfContacts()}*/}
          <AddReceiver currentNewReceiver = {this.props.receivers.currentNewReceiver}/>
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

module.exports = Receivers;
