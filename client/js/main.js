const Router = require('react-router').Router;
const Route = require('react-router').Route;
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const IndexRoute = require('react-router').IndexRoute;

const Layout = require('./layout');
const CustomerContent = require('./components/customer-content');
const AdminContent = require('./components/admin-content');

console.log(Router);
ReactDOM.render((
  <Router history = {hashHistory}>
    <Route path = "/" component = {Layout}>
      <IndexRoute component = {CustomerContent} />
      <Route path = "admin" component = {AdminContent} />
    </Route>
  </Router>

), document.getElementById('app-wrapper'));

