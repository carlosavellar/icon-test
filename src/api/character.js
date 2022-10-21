import axios from 'axios';

export const getCharacter = () => {
  return axios.get('/users', {
    withCredentials: false,
    params: {
      limit: 1000,
    },
  });
};
