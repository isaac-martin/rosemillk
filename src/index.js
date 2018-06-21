import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Client, {Config} from 'shopify-buy';
import './styles/app.css';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import roseMilkApp from './store';

const config = new Config({
  storefrontAccessToken: 'f1166bffb632479b45464b93f1b8f0fd',
  domain: 'myrosemilk.myshopify.com'
});

export const client = new Client(config);

let store = createStore(
  roseMilkApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => (
  <Provider store={store}>
    <App client={client} />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
