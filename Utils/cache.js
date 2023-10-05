const _ = require("lodash");

class ExpiringCache {
  constructor(ttl = 60000) {
    // default: 60 seconds
    this.ttl = ttl;
    this.cache = new Map();
    this.timeouts = new Map();
  }

  memoize(func) {
    const resolver = (...args) => {
      const key = args.join(",");
      if (!this.cache.has(key)) {
        const result = func(...args);
        this.cache.set(key, result);

        // set the expiration timeout
        this.timeouts.set(
          key,
          setTimeout(() => {
            this.cache.delete(key);
            this.timeouts.delete(key);
          }, this.ttl)
        );

        return result;
      }
      return this.cache.get(key);
    };
    return resolver;
  }
}

module.exports = ExpiringCache;
