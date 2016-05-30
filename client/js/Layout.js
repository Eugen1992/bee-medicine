var BookTimeView = require('./BookingModule').View;
var PopupButton = require('./popup-button');

class Layout extends React.Component {
  render() {
    return (
    <div className="main">
      <div className="header">
        <div className="header-text js-logo">
          ПЧЕЛИНАЯ МЕДИЦИНА
        </div>
        <PopupButton />
      </div>
      <div className="container">
        <div className="headline dark-style">
          Что это?
        </div>
        <div className="external-block dark-frame">
          <div>
            Лежанка на пчелиных ульях (улье-апитерапия) - метод оздоровительного воздействия на организм                    человека активным биополем и создаваемой пчелиными семьями, базирующемся на очистке человеческого энергетического поля от наслоений негативной энергии, снятия энергетических блоков и зажимов, которые являются                  причиной болезней физического тела.
          </div>
        </div>
      </div>
      <div className="logo2">
        <div className="headline light-style">
          Что мы предлaгаем
        </div>
        <div className="external-block light-frame">
          <div>
            When you work with us, you are part of a team of committed collaborators.
            All aspects of our software development process are integrated, iterative and agile.

            Our approach unifies design, development and
            product management to create exceptional products.
            We start each project by understanding your business goals,
            the user&#8217;s needs and the product requirements.
            Then we help translate them into effective and elegant solutions.
          </div>
        </div>
      </div>
      <div className="container">
        <div className="headline dark-style">Сон на ульях</div>
        <div className="js-service-block external-block dark-frame">
        </div>
      </div>
      <div className="pics-block">
        <div className="pic small small-1"></div>
        <div className="pic big"></div>
        <div className="pic small small-2"></div>
      </div>
      <div className="pics-block">
        <div className="pic small small-3"></div>
        <div className="pic biger big-2"></div>
        <div className="pic small small-4"></div>
      </div>
      <div className="container js-footer">
        <div className="headline dark-style">Контакты</div>
        <div className="external-block dark-frame">
          <div className="js-contact-block"></div>
          <div className="js-contact contact-btn contact-btn-bottom" data-state="book">Заказать услугу</div>
        </div>
      </div>
    </div>
    )
  }
}

module.exports = Layout;