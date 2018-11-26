import React from 'react';
import 'tachyons';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import ScrollTop from './components/ScrollTop';


import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: 'f1166bffb632479b45464b93f1b8f0fd',
  domain: 'checkout.rosemi.lk'
});

ReactDOM.render(
  <BrowserRouter>
  <ScrollTop>
    <App client={client} />
    </ScrollTop>
  </BrowserRouter>,
  document.getElementById('root')
);
