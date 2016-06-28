const Router = require('react-router').Router;
const Route = require('react-router').Route;
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const browserHistory = require('react-router').browserHistory;
const IndexRoute = require('react-router').IndexRoute;

const Layout = require('./layout');
const CustomerContent = require('./components/customer-content');
const AdminContent = require('./components/admin-content');

ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path = "/" component = {Layout}>
      <IndexRoute component = {CustomerContent} />
      <Route path = "admin" component = {AdminContent} />
    </Route>
  </Router>

), document.getElementById('app-wrapper'));

