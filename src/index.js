import React from 'react';
import 'tachyons';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import ComingSoon  from '../src/components/comingSoon';

import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: 'f1166bffb632479b45464b93f1b8f0fd',
  domain: 'myrosemilk.myshopify.com'
});

ReactDOM.render(
  <BrowserRouter>
    <ComingSoon />
  </BrowserRouter>,
  document.getElementById('root')
);
