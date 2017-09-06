import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import App from './components/App';
import reducers from './reducers';

const logger = createLogger();
const middleware = [logger, promise(), thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
