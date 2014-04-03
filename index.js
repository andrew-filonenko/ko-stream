var through = require('through');

module.exports = function (ko) {
  function createStream() {
    var obs = this;
    var stream =  through(function (data) {
      var self = this;
      obs(data);
      self.emit('data', obs());
    });
    stream.emit('data', obs());
    obs.subscribe(function (newVal) {
      stream.emit('data', newVal);
    });
    return stream;
  }
  ko.subscribable.fn.createStream = createStream;
};
