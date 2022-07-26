
const React = require('react');
const embed = require('./embed');

module.exports = function withState (state) {
  return Object.assign({}, this, embed(state));
};
