const AddReceiver = require('./add-receiver.js');
const ReceiverItem = require('./receiver-item.js');

class Receivers extends React.Component {
  render() {
    return (
      <div className="container js-footer">
        <div className="headline dark-style">Список получателей уведомлений</div>
        <div className="external-block dark-frame">
          {this.getListOfContacts()}
          <AddReceiver currentNewReceiver = {this.props.receivers.currentNewReceiver}/>
        </div>
      </div>
    )
  }
  getListOfContacts() {
    var list = [];
    if (this.props.receivers.data) {
      this.props.receivers.data.forEach(function (receiver, index) {
        list.push(
          <ReceiverItem data={receiver} key={index}/>
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
