function Interval(callback, ms) {
  var start = Date.now();

  var _interval = function() {
    var end = Date.now();
    callback();
    start += ms;

    var diff = end - start;
    var nextInterval = ((ms - diff) >= 0) ? (ms - diff) : 0;
    console.log(nextInterval);
    setTimeout(function() {
      _interval();
    }, nextInterval);
  };
  setTimeout(function() {
    _interval.call(null);
  }, ms);
}

var i = 1;
var total = 0;
var start = Date.now();
Interval(function() {
  var end = Date.now();
  total += (end - start);
  start = end;
  console.log('Interval #' + i + ': ' + total);
  i++;
}, 1000);