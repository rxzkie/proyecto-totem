(function (global) {
  function createRouter(onChange) {
    var route = { name: "loop", sectionId: null };
    function go(name, sectionId) {
      route = { name: name, sectionId: sectionId || null };
      onChange(route);
    }
    function current() {
      return route;
    }
    return { go: go, current: current };
  }
  global.createRouter = createRouter;
})(window);
