import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import users from './users';

const rootReducer = combineReducers({
  users,
  form
});

export default rootReducer;
