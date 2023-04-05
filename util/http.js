import axios from 'axios';

const BACKEND_URL = 'https://react-native-course-bef50-default-rtdb.firebaseio.com/';

export function addUser(userData) {
  console.log('entered addUser function');
  const response = axios.post(BACKEND_URL + '/users.json', userData);
  console.log('addUser response: ' + response);
  const id = response.data.name;
  console.log('addUser id: ' + id);
  return id;
}
