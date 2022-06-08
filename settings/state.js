'use strict';

const playnet = require('@fabric/core/settings/playnet');

module.exports = {
  host: 'faucet.playnet.portaldefi.com',
  port: 443,
  secure: true,
  seed: null,
  status: 'PAUSED',
  identity: {
    seed: playnet.key.seed
  },
  nodes: [
    'localhost:9977'
  ],
};
