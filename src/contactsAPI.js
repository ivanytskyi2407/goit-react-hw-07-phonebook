import axios from 'axios';

axios.defaults.baseURL = 'https://62a390be21232ff9b2223249.mockapi.io';

export async function contactsAPI() {
  const { data } = await axios.get('/contacts');
  return data;
}
