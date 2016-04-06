var PersistedObject;

(function() {
  /* global localStorage */
  PersistedObject = new Proxy(function() {}, {
    construct: function(target, UUID) {
      var orig = {};
      var loadFromStore = function() {
        Object.assign(orig, JSON.parse(localStorage.getItem(UUID)));
      }
      var dumpToStore = function() {
        localStorage.setItem(UUID, JSON.stringify(orig));
        return true;
      }
      var setter = function(target, key, value) {
        loadFromStore();
        var result = orig[key] = value;
        dumpToStore();
        return result;
      };
      return new Proxy(orig, {
        get: function(target, key) { 
          loadFromStore();
          return orig[key];
        },
        set: setter,
        has: function(target, key) {
          loadFromStore();
          return key in orig;
        },
        ownKeys: function(target) {
          loadFromStore();
          return Object.getOwnPropertyNames(orig);
        },
        deleteProperty: function(target, key) {
          loadFromStore();
          var result = delete orig[key];
          dumpToStore();
          return result;
        },
        defineProperty: setter
      });
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = PersistedObject;
  }
})();