(function() {
  /* globals define, Promise */

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  generateModule('bluebird', { 'default': Promise.noConflict()});
})();
