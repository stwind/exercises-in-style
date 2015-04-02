var debug = require('debug')('app:douban-diary');
var React = require('react');

var StyleMixin = require('../styleMixin');
var Text = require('./text');

var Cover = React.createClass({
  mixins: [StyleMixin('douban-diary')],

  render: function () {

    return (
      <div className="p-douban-diary">
        <Text />
      </div>
    );
  } 
});

module.exports = Cover;
