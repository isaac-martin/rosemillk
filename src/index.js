import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'tachyons';
import './styles/app.css';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import roseMilkApp from './store';

let store = createStore(
  roseMilkApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
