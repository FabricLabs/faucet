// React
import * as React from 'react';
import { connect } from 'react-redux';
import { 
  recipientAddressClear, 
  recipientAddressUpdate,
  setState,
  statusUpdate,
} from '../features/faucet/faucetSlice'
// import FabricStateMapper from '../StateMapper';
import * as merge from 'lodash.merge';

// Cryptography
import createHash from 'create-hash';

// Dependencies
import * as bitcoin from 'bitcoinjs-lib';

// Fabric Types
import FabricComponent from '@fabric/http';

// Fabric Components
import FabricModal from '@fabric/http';

// Fabric Services
// import Bitcoin from '@fabric/core/services/bitcoin';

// Components
import {
  Button,
  Form,
  Input
} from 'fomantic-ui-react';

// Internals
// import FabricKeyPair from './FabricKeyPair';

// Fabric Types
import * as Actor from '@fabric/core/types/actor';
// import * as Key from '@fabric/core/types/key';
// import * as Signer from '@fabric/core/types/signer';

class FaucetDripForm extends FabricComponent {
  constructor (props) {
    super(props);

    this.settings = Object.assign({
      network: 'regtest'
    }, props.state);

    /* this.wallet = new Wallet({
      network: this.settings.network
    }); */

    let getRandomBytes = (
      (typeof self !== 'undefined' && (self.crypto || self.msCrypto))
        ? function() { // Browsers
            var crypto = (self.crypto || self.msCrypto), QUOTA = 65536;
            return function(n) {
              var a = new Uint8Array(n);
              for (var i = 0; i < n; i += QUOTA) {
                crypto.getRandomValues(a.subarray(i, i + Math.min(n - i, QUOTA)));
              }
              return a;
            };
          }
        : function() { // Node
            return require("crypto").randomBytes;
          }
    )();
    // this.key = new Key(this.settings);
    // this._key = new bcoin.hd.key();

    // TODO: prepare Fabric
    // i.e., use _state here, then import from getter and apply properties
    // _from_ @react
    this.state = merge.merge({
      address: null,
      content: {
        requests: []
      },
      requests: {},
      secret: getRandomBytes(32), // solution hash (revealed on trade)
      status: 'LOADING'
    }, props.state);

    this.inputAddress = props.state.recipient;

    // TODO: evaluate removing ZMQ
    // this.bitcoin = new Bitcoin(this.settings);


    return this;
  }

  componentDidMount() {
    // set status to loaded
    this.props.statusUpdate("LOADED");
  }

  get networks () {
    return {
      'mainnet': bitcoin.networks.mainnet,
      'regtest': bitcoin.networks.regtest,
      'testnet': bitcoin.networks.testnet
    };
  }

  _handleAddressChange (e) {
    this.setState({ address: e.target.value });
    const isValid = this.validateAddress(e.target.value);
    if (!isValid) {
      this.setState({
        status: 'ERROR',
        errors: [
          'Invalid Bitcoin address.'
        ]
      });
    }
  }

  _handleSecretChange (e) {
    this.setState({ secret: e.target.value });
  }

  _handleSubmitButtonClick (e) {
    console.log('submit button click:', e);
  }

  _handleChange (e) {
    // const fields = { ...this.state.fields, [e.target.name]: e.target.value };
    // TODO: merge old state
    // this.setState({ fields: fields });
  }

  handleChange (e) {
    // setInputAddress(e.target.value);
    // setTimeout(function () {
  
      // TODO: add debounce

      // if(inputAddress) { // TODO: add validateAddress
        this.props.recipientAddressUpdate(e.target.value);
      // } else this.props.recipientAddressUpdate('');
      
    // }, 1000);
  }

  render () {
    return (
      <>
        <Form
          ref={this.props.form}
          loading={(this.props.state.status === 'LOADING')}
          disabled={(this.props.state.status === 'LOADING')}
          onSubmit={this.props.onSubmit.bind(this)}>
          <Form.Field>
            <label>Request a deposit to&hellip;</label>
            <div className='ui input'>
              <Input ref={this.props.field} action type='text' placeholder='Enter a Bitcoin address here' value={this.props.state.recipient || ''} onChange={this.handleChange.bind(this)} />
              <Button ref={this.props.button}
                attached
                type='submit'
                loading={(this.props.state.status === 'LOADING')}
                disabled={(this.props.state.status === 'REQUESTING') || (this.props.state.status === 'PAUSED') || (this.props.state.status === 'ERROR')}
                color='green' content='Request' icon='right chevron' labelPosition='right' onClick={this.props.onSubmit.bind(this)} />
            </div>
            <FabricModal />
          </Form.Field>
        </Form>
      </>
    );
  }

  start () {
    console.log('[FAUCET:DRIPS]', 'Starting component...');
    super.start();
    this.sync();
    return this;
  }

  sync () {
    const preimage = createHash('sha256').update(this.state.secret).digest('hex');
    this.setState({ preimage: preimage });
    return this;
  }

  validateAddress (address) {
    try {
      bitcoin.address.toOutputScript(address, this.networks[this.settings.network]);
      return true;
    } catch (e) {
      return false;
    }
  }
}

// TODO: discuss with @victorwu
const mapStateToProps = (state) => ({
  state: state,
  recipient: state.recipient
});

export default connect(mapStateToProps, {
  recipientAddressClear,
  recipientAddressUpdate,
  setState,
  statusUpdate
}, null, { forwardRef: true })(FaucetDripForm);
