(function (global) {
  function createIdle(ms, onIdle) {
    var timer = null;
    var delay = ms || 60000;
    function clear() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function arm() {
      clear();
      timer = setTimeout(function () {
        onIdle();
      }, delay);
    }
    function bump() {
      arm();
    }
    function start() {
      arm();
    }
    function stop() {
      clear();
    }
    return { bump: bump, start: start, stop: stop, setDelay: function (v) { delay = v; } };
  }
  global.createIdle = createIdle;
})(window);
