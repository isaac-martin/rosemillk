import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client, {Config} from 'shopify-buy';
import './styles/app.css';

const config = new Config({
    storefrontAccessToken: 'f1166bffb632479b45464b93f1b8f0fd',
    domain: 'myrosemilk.myshopify.com'
});

export const client = new Client(config);

ReactDOM.render(<App client={client} />, document.getElementById('root'));
