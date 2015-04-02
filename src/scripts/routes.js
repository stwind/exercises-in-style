var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, Redirect, Link } = Router;

var App = require('./app');
var Home = require('./components/Home');

function handler (name) {
  return require('./components/' + name + '/cover');
}

function route (name) {
  return <Route name={name} path={name} handler={handler(name)}/>;
}

var routes = (
  <Route path="/" handler={App}>
    {route('douban-diary')}
    <Redirect from="/" to="douban-diary"/>
  </Route>
);

module.exports = routes;
