(this["webpackJsonp@fabric/faucet"]=this["webpackJsonp@fabric/faucet"]||[]).push([[0],{216:function(e,t,s){},311:function(e,t,s){},312:function(e,t,s){},32:function(e,t,s){"use strict";var n=s(310);e.exports={host:"65.21.231.166",port:9999,secure:!1,seed:null,status:"PAUSED",balances:[{asset:"Bitcoin",symbol:"BTC",confirmed:0,type:"confirmed"},{asset:"Liquid BTC (LBTC)",symbol:"BTC",confirmed:0,type:"confirmed"},{asset:"Shyft",symbol:"SHFT",confirmed:0,type:"confirmed"},{asset:"Bitcoin (testnet)",symbol:"TBTC",confirmed:0,type:"confirmed"},{asset:"Bitcoin (regtest)",symbol:"RBTC",confirmed:0,type:"confirmed"},{asset:"BTC A",symbol:"BTCA",confirmed:0,type:"confirmed"},{asset:"BTC B",symbol:"BTCB",confirmed:0,type:"confirmed"},{asset:"Lightning BTC",symbol:"BTC",confirmed:.001,type:"outbound"},{asset:"Lightning BTC",symbol:"BTC",confirmed:.001,type:"inbound"}],chains:[{name:"Fabric (playnet)",asset:"PFAB",tip:"???"},{name:"Bitcoin (mainnet)",asset:"BTC",tip:"???",genesis:"000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"},{name:"Bitcoin (regtest)",asset:"RBTC",tip:"???"},{name:"Bitcoin (testnet)",asset:"TBTC",tip:"???"},{name:"BTC A (regtest)",asset:"BTCA",tip:"???"},{name:"BTC B (regtest)",asset:"BTCB",tip:"???"},{name:"Ethereum (Ropsten)",asset:"ETHR",tip:"???"}],channels:[],keys:[],identity:{id:"",seed:n.key.seed},nodes:["localhost:9977","localhost:9978","localhost:9979","localhost:9980","localhost:9981"],orders:[],peers:[{id:"???",alias:"NUEVO",host:"localhost",port:"7777",asset:"BTC"}],transactions:[]}},322:function(e,t){},324:function(e,t){},335:function(e,t){},337:function(e,t){},363:function(e,t){},364:function(e,t){},370:function(e,t){},388:function(e,t){},417:function(e,t){},419:function(e,t){},431:function(e,t){},479:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),i=s(60),c=s.n(i),r=(s(478),s(32));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s(216);var o=s(26),l=s(27),h=s(30),d=s(28),u=s(29),b=s(31),j=s(37),m=s.n(j),f=s(210),g=s(12),O=(s(311),s(312),s(77)),y=s.n(O),p=s(208),x=s(499),v=s(2),k=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(o.a)(this,s),n=t.call(this,e),e.import&&(n.state=m()({integrity:null,status:"PAUSED"},r,e)),n.actor=new O(n.state),n.ec=new p("secp256k1"),n.ref=a.a.createRef(),Object(h.a)(n,Object(d.a)(n))}return Object(l.a)(s,[{key:"genesis",get:function(){return this.actor?this.actor.id:"00000000000000000000000000000000"}},{key:"dochash",get:function(){return this.actor?this.actor.id:"00000000000000000000000000000000"}},{key:"link",get:function(){return"fabric:".concat(this.dochash)}},{key:"integrity",get:function(){return"sha256-deadbeefbabe"}},{key:"componentDidMount",value:function(){this.start(),console.log("[FABRIC:COMPONENT]","Mounted:",this)}},{key:"componentWillReceiveProps",value:function(e){this.setState({hash:e.hash})}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("fabric-component",{ref:this.ref,children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(x.a.Content,{children:Object(v.jsx)("fabric-graph",{children:Object(v.jsx)("svg",{id:"graph"})})}),Object(v.jsx)(x.a.Content,{children:this.props.children})]})})})}},{key:"start",value:function(){var e=new O(this.state);return console.log("actor:",e),console.log("actor ID:",e.id.constructor.name,e.id),this.setState({hash:e.id}),this}}]),s}(n.Component),C=s(168),B=s(81),S=s.n(B),w=s(480),T=s(93),R=s(497),_=s(133),N=s(290),E=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).settings=Object.assign({host:"localhost",port:9999},e),n.state=m()({integrity:"sha256-deadbeefbabe",status:"disconnected",messages:[],meta:{messages:{count:0}}},r,e),console.log("bridge settings:",n.settings),n.remote=new N({host:"nuevo",port:n.settings.port,secure:!1}),Object(h.a)(n,Object(d.a)(n))}return Object(l.a)(s,[{key:"_handleRemoteMessage",value:function(e){console.log("Remote message:",e),this._syncState()}},{key:"_handleRemoteError",value:function(e){console.log("Remote error:",e)}},{key:"_syncState",value:function(){this.setState({status:this.remote._state.status,messages:this.remote._state.messages,meta:this.remote._state.meta})}},{key:"componentDidMount",value:function(){console.log("bridge mounted! starting..."),this.start()}},{key:"connect",value:function(){this._syncState(),this.remote.connect(),this._syncState()}},{key:"executeMethod",value:function(e,t){return this.remote.executeMethod(e,t)}},{key:"ping",value:function(){this.remote.ping()}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(x.a,{fluid:!0,children:[Object(v.jsxs)(x.a.Content,{children:[Object(v.jsxs)(w.a.Group,{floated:"right",children:[Object(v.jsxs)(w.a,{onClick:this.ping.bind(this),children:["Ping ",Object(v.jsx)(T.a,{name:"info"})]}),Object(v.jsxs)(w.a,{onClick:this.connect.bind(this),children:["Connect ",Object(v.jsx)(T.a,{name:"lightning"})]})]}),Object(v.jsx)(x.a.Header,{as:"h3",children:"Bridge"})]}),Object(v.jsx)(x.a.Content,{children:Object(v.jsx)(R.a,{children:this.state.messages.map((function(e,t){return Object(v.jsx)(R.a.Event,{size:"small",style:{fontSize:"0.8em",fontFamily:"monospace"},children:Object(v.jsx)(R.a.Content,{children:Object(v.jsx)("div",{style:{color:"black"},children:JSON.stringify(e,null,"  ")})})},t)}))})}),Object(v.jsxs)(x.a.Content,{extra:!0,children:[Object(v.jsxs)(_.a,{children:[Object(v.jsx)(T.a,{name:"info"})," ",this.remote._state.status]}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(T.a,{name:"mail"})," ",this.remote._state.meta.messages.count]})]})]})})}},{key:"_handleRemoteReady",value:function(){var e=Object(C.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._syncState(),console.log("Remote ready!"),e.next=4,this.executeMethod("btc_getbalances");case 4:t=e.sent,console.log("balances:",t);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"send",value:function(){var e=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.remote.send(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"start",value:function(){var e=Object(C.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.remote.on("ready",this._handleRemoteReady.bind(this)),this.remote.on("message",this._handleRemoteMessage.bind(this)),this.remote.on("error",this._handleRemoteError.bind(this)),this.connect();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),s}(k),A=E,M=s(53),F=(s(500),s(498)),P=s(501),H=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={transactions:[],integrity:"sha256-deadbeefbabe"},n}return Object(l.a)(s,[{key:"_addKey",value:function(e){this.setState({keys:this.state.keys.concat(e)})}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"ui vertical stripe segment",children:Object(v.jsx)("div",{className:"ui stackable grid container",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"column",children:Object(v.jsx)(x.a,{fluid:!0,children:Object(v.jsxs)(x.a.Content,{children:[Object(v.jsx)(P.a,{children:Object(v.jsxs)("h1",{children:[Object(v.jsx)(T.a,{name:"tasks"})," Transactions"]})}),Object(v.jsxs)(F.a,{celled:!0,children:[Object(v.jsx)(F.a.Header,{children:Object(v.jsxs)(F.a.Row,{children:[Object(v.jsx)(F.a.HeaderCell,{children:"ID"}),Object(v.jsx)(F.a.HeaderCell,{children:"Version"}),Object(v.jsx)(F.a.HeaderCell,{children:"Inputs"}),Object(v.jsx)(F.a.HeaderCell,{children:"Outputs"}),Object(v.jsx)(F.a.HeaderCell,{children:"Signature"})]})}),Object(v.jsx)(F.a.Body,{children:this.state.transactions.map((function(e,t){return Object(v.jsxs)(F.a.Row,{children:[Object(v.jsx)(F.a.Cell,{children:e.id}),Object(v.jsx)(F.a.Cell,{children:e.version}),Object(v.jsx)(F.a.Cell,{children:e.inputs}),Object(v.jsx)(F.a.Cell,{children:e.outputs}),Object(v.jsx)(F.a.Cell,{children:e.signature})]},t)}))})]})]})})})})})})})}}]),s}(k),D=s(494),I=s(502),q=s(495),U=s(213),L=s(292),J=s(87),V=s(67),W=s(134),z=s(496),K=s(493),G=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).settings=m()({network:"regtest"},e),n.state=m()({content:{requests:[]},fields:{address:""},requests:{},secret:O.randomBytes(32)},e),n.form=a.a.createRef(),Object(h.a)(n,Object(d.a)(n))}return Object(l.a)(s,[{key:"networks",get:function(){return{mainnet:W.networks.mainnet,regtest:W.networks.regtest,testnet:W.networks.testnet}}},{key:"_handleAddressChange",value:function(e){this.setState({fields:{address:e.target.value}}),console.log("state:",this.state),console.log("value:",e.target.value),console.log("network:",this.networks.regtest);var t=this.validateAddress(e.target.value);console.log("isValid:",t),t||this.setState({status:"ERROR",errors:["Invalid Bitcoin address."]})}},{key:"_handleSecretChange",value:function(e){this.setState({secret:e.target.value})}},{key:"_handleSubmitButtonClick",value:function(e){console.log("submit button click:",e)}},{key:"handleChange",value:function(e){var t=Object(U.a)(Object(U.a)({},this.state.fields),{},Object(M.a)({},e.target.name,e.target.value));this.setState({fields:t})}},{key:"handleSubmit",value:function(e){console.log("submitting:",e);var t=this.state,s=t.name,n=t.email;this.setState({submittedName:s,submittedEmail:n})}},{key:"regenerate",value:function(){this.setState({secret:O.randomBytes(32)}),this.sync()}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(z.a,{ref:this.form,onSubmit:this.props.onSubmit.bind(this),onChange:this.handleChange.bind(this),children:Object(v.jsxs)(z.a.Field,{children:[Object(v.jsx)("label",{children:"Request a deposit to..."}),Object(v.jsxs)("div",{className:"ui input",children:[Object(v.jsx)(K.a,{action:!0,type:"text",placeholder:"Enter a Bitcoin address here",value:this.state.address,onKeyUp:this._handleAddressChange.bind(this)}),Object(v.jsx)(w.a,{attached:!0,type:"submit",color:"green",content:"Request",icon:"right chevron",labelPosition:"right",onClick:this.props.onSubmit.bind(this)})]})]})})})}},{key:"start",value:function(){return console.log("[FAUCET:DRIPS]","Starting component..."),Object(L.a)(Object(J.a)(s.prototype),"start",this).call(this),this.sync(),this}},{key:"sync",value:function(){var e=Object(V.createHash)("sha256").update(this.state.secret).digest("hex");return this.setState({preimage:e}),this}},{key:"validateAddress",value:function(e){try{return W.address.toOutputScript(e,this.networks[this.settings.network]),!0}catch(t){return!1}}}]),s}(k),$=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state=Object.assign({host:"localhost",integrity:"sha256-deadbeefbabe"},e),n.bridge=a.a.createRef(),n.form=a.a.createRef(),Object(h.a)(n)}return Object(l.a)(s,[{key:"onSubmit",value:function(e){console.log("submitting:",e),console.log("address from ref:",this.form.current.state);var t={type:"Call",data:{method:"DripRequest",params:[this.form.current.state.fields.address]}};this.bridge.current.send(t).then((function(e){console.log("result:",e)}))}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("fabric-bridge-home",{ref:this.ref,children:Object(v.jsx)(D.a,{onBottomPassed:this._handleMastheadBottomPassed.bind(this),children:Object(v.jsx)(I.a,{className:"ui inverted vertical masthead center aligned segment",children:Object(v.jsxs)(q.a,{className:"ui text container",children:[Object(v.jsxs)("h1",{className:"ui inverted header",children:[Object(v.jsx)(T.a,{name:"tint"})," bitfaucet"]}),Object(v.jsxs)("h2",{children:["The official ",Object(v.jsx)("code",{children:"@fabric/playnet"})," faucet."]}),Object(v.jsxs)(q.a,{className:"left aligned",style:{marginTop:"5em"},children:[Object(v.jsx)(x.a,{fluid:!0,children:Object(v.jsx)(x.a.Content,{children:Object(v.jsx)(G,{ref:this.form,onSubmit:this.onSubmit.bind(this)})})}),Object(v.jsx)(x.a,{fluid:!0,children:Object(v.jsx)(x.a.Content,{children:Object(v.jsx)(A,{ref:this.bridge,host:this.state.host,onChange:this._handleBridgeChange.bind(this),state:this.state})})})]})]})})})})})}},{key:"_handleBridgeChange",value:function(e){console.log("bridge change:",e)}},{key:"_handleMastheadBottomPassed",value:function(e,t){var s=t.calculations;console.log("vis change:",e,s),this.setState({calculations:s})}}]),s}(k),Q=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).settings=j({},r,e),n.state=j({actor:null,host:"localhost",integrity:null,snapshots:[]},r,e),Object(h.a)(n,Object(d.a)(n))}return Object(l.a)(s,[{key:"_handleBridgeChange",value:function(e){console.log("bridge change:",e)}},{key:"componentDidMount",value:function(){new y.a(this.state);return this}},{key:"render",value:function(){return Object(v.jsx)("react-application",{id:"root",children:Object(v.jsx)(f.a,{children:Object(v.jsx)("div",{className:"pusher",children:Object(v.jsxs)(g.c,{children:[Object(v.jsx)(g.a,{path:"/",exact:!0,element:Object(v.jsx)($,{state:this.state,balances:this.state.balances,keys:this.state.keys,host:this.state.host})}),Object(v.jsx)(g.a,{path:"/transactions",element:Object(v.jsx)(H,{state:this.state,balances:this.state.balances,keys:this.state.keys})})]})})})})}}]),s}(k);c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(Q,{state:r,host:r.host})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[479,1,2]]]);
//# sourceMappingURL=main.32554461.chunk.js.map