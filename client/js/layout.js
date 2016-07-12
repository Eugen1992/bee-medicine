class Layout extends React.Component {
  render() {
    return (
      <div className="main">
        {this.props.children}
      </div>
    )
  }
}

module.exports = Layout;