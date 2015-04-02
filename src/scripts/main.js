var debug = require('debug');
var React = require('react');
var Router = require('react-router');

debug.enable('app:*');

var routes = require('./routes');

React.initializeTouchEvents(true);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});
