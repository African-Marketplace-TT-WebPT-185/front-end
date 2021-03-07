import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token,
      'Access-Control-Origin-Allow': '*'
    },
    baseURL: 'https://backup-backend-185.herokuapp.com/'
  })
}