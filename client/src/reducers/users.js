//import { GET_USERS } from '../actions/Users';

const initialState = {
  usersList: []
};

export default function users(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'GET_USERS_FULFILLED':
      return {
        ...state,
        usersList: payload.data
      };
    case 'CREATE_USER_FULFILLED':
      return {
        ...state
      };
    default:
      return state;
  }
}
