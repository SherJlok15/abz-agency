import axios from '../../core';

export default {
  getUsers: (count) => axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count ? count : 6}`),
  getPositions: () => axios.get('http://frontend-test-assignment-api.abz.agency/api/v1/positions'),
  postUser: (data, token) => axios.post('http://frontend-test-assignment-api.abz.agency/api/v1/users', data, {
    headers: { Token: token }
  }),
  getToken: () => axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
}
