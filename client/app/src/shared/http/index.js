import axios from 'axios';
export const apiUrl = 'http://localhost:5000'

const token = localStorage.getItem('@auth/token') || 'invalid-token';

export default axios.create({
  baseURL: apiUrl,
  headers: {'Authorization': `Bearer ${token}`}
});