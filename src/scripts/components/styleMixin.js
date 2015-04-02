
module.exports = function (name) {
  var style = require('styles/' + name + '.scss');

  return {
    statics: {
      willTransitionTo: function () {
        style.use();
      },
      willTransitionFrom: function () {
        style.unuse();
      }
    }
  };
};
