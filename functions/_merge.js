const React = require('react');

export default function merge (target, source) {
  for (const [key, val] of Object.entries(source)) {
    if (val !== null && typeof val === 'object') {
      if (target[key] === undefined) {
        target[key] = new val.__proto__.constructor();
      }

      merge(val, target[key]);
    } else {
      target[key] = val;
    }
  }

  return target;
}
