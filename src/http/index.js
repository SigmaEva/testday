const axios = require('axios');

let SRC_URL = 'https://hacker-news.firebaseio.com/v0/';

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
