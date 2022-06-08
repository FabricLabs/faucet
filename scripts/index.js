/**
 * Copyright: 2019, Fabric Labs
 */

// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';
import { store } from '../stores/redux';

// Styles
import '../styles/index.css';

// Components
import BitFaucet from '../components/BitFaucet';

// Settings
const settings = {}; // TODO: canonicalize settings / state

// Main Process Definition
async function main (input = {}) {
  const container = document.getElementById('root');
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <BitFaucet state={input} />
    </Provider>
  );

  return {
    react: { root }
  };
}

// Run Main Process
main(settings).catch((exception) => {
  console.error('[PORTAL:FEED] Main Process Exception:', exception);
}).then((output) => {
  console.log('[PORTAL:FEED] Main Process Output:', output);
});
