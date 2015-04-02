var React = require('react');

var StyleMixin = require('../styleMixin');
var Text = require('./text');

var Cover = React.createClass({
  mixins: [StyleMixin('douban-diary')],

  render: function () {

    return (
      <div id="douban-diary">
        <Text />
      </div>
    );
  } 
});

module.exports = Cover;
