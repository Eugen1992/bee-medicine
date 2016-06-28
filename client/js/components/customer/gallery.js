class Gallery extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

module.exports = Gallery;
