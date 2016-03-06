/**
 * Created by leojpod on 3/6/16.
 */

var fork = require('child_process').fork;

module.exports = function (n, cb) {
  var fiboComputer = fork('./fibonacci');
  fiboComputer.on('message', function (msg) {
    console.log('fibo of %s is %s', n, msg);
    cb(msg);
  });

  fiboComputer.send(n);
};
