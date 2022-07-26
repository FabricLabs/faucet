'use strict';

// import * as playnet from '@fabric/core/settings/playnet';
const playnet = {
  key: {
    seed: null
  }
};

export default {
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
