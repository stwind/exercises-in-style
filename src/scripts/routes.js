var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, Redirect, Link } = Router;

var App = require('./app');
var Home = require('./components/Home');

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home}/>
  </Route>
);

module.exports = routes;
