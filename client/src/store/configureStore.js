import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import reducers from '../reducers';

const logger = createLogger();
const middleware = [logger, promise(), thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
