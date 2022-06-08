// Dependencies
import * as merge from 'lodash.merge';

// React
import React, { Component } from 'react';
import { store } from '../stores/redux';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

// Stylesheets
import '../libraries/fomantic/dist/semantic.css';
import '../styles/index.css';

// Fabric Types
import Actor from '@fabric/core/types/actor';

// Fabric Components
// import FabricBridge from './FabricBridge';
// import FabricDebugger from '@fabric/http';
// import FabricIdentityManager from '@fabric/http';
// import FabricNodeList from '@fabric/http';
// import FabricTransactionList from '@fabric/http';

// Portal
import Faucet from './Faucet';

/**
 * The Portal web application.
 */
class App extends Component {
  constructor (settings) {
    super(settings);

    const state = store.getState();

    this.settings = merge({

    }, state, settings);

    // this.fabric = new Fabric();
    this.state = merge({
      actor: null,
      host: 'localhost',
      integrity: null,
      snapshots: []
    }, state, settings);

    return this;
  }

  _handleBridgeChange (event) {
    console.log('bridge change:', event);
  }

  componentDidMount () {
    const proof = new Actor(this.state);
    return this;
  }

  render () {
    return (
      <react-application id='root'>
        <Router>
          <div className='pusher'>
            <Routes>
              <Route path='/' exact element={<Home state={this.state} balances={this.state.balances} keys={this.state.keys} host={this.state.host} />} />
              {/* <Route path='/transactions' element={<FabricTransactionList state={this.state} balances={this.state.balances} keys={this.state.keys} />} /> */ }
            </Routes>
            {/*
            <Segment className='ui inverted vertical footer segment'>
              <Container className='ui container'>
                <FabricDebugger />
                <Divider />
                <FabricBridge onChange={this._handleBridgeChange.bind(this)} port={this.settings.port} />
              </Container>
            </Segment>
            */}
          </div>
        </Router>
      </react-application>
    );
  }
}

export default App;
