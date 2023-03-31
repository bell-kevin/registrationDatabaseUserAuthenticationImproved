import axios from 'axios';

const BACKEND_URL = 'https://dtc-registration-db-3019-default-rtdb.firebaseio.com';

export async function addUser(userData) {
  const response = await axios.post(BACKEND_URL + '/users.json', userData);
  const id = response.data.name;

  return id;
}