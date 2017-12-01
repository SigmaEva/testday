const axios = require('axios');

let SRC_URL = 'http://todo-backed-sintara.herokuapp.com/';

const httpBack = axios.create({
  baseURL: SRC_URL
});

httpBack.interceptors.response.use(
  response => response,
  (err) => {
    console.error('----- httpBack err -----\n', err.stack);
    return Promise.resolve((err.response && err.response.data) || err);
  }
);

module.exports = config => httpBack(config);
