var through = require('through');
var isEqual = require('is-equal');

module.exports = function (ko) {
  function createStream() {
    var obs = this;
    var stream =  through(function (data) {
      var self = this;
      if (!isEqual(data, obs())) {
        obs(data);
      }
    });
    stream.emit('data', obs());
    obs.subscribe(function (newVal) {
      stream.emit('data', newVal);
    });
    return stream;
  }
  ko.subscribable.fn.createStream = createStream;
};
