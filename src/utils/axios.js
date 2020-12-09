import axios from 'axios';

const token = localStorage.getItem('x-auth-token');
const baseURL = process.env.REACT_APP_BACKEND_URL;

const http = axios.create({
  baseURL,
  headers: {
    'x-auth-token': token,
    'Content-Type': 'application/json',
  },
});

export default http;
