import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const CREATE_USER = 'CREATE_USER';

export function getUsers() {
  const request = axios.get('/api/users');
  return {
    type: GET_USERS,
    payload: request
  };
}

export function createUser(values) {
  const request = axios.post('/api/createUser', values);
  return {
    type: CREATE_USER,
    payload: request
  };
}
