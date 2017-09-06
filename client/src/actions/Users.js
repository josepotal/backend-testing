import axios from 'axios';

export const GET_USERS = 'GET_USERS';

export function getUsers() {
  const request = axios.get('/api/users');
  return {
    type: GET_USERS,
    payload: request
  };
}
