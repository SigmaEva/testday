const httpBack = require('../http');

export function getTodoList() {
  return httpBack({
    method: 'GET',
    url: 'todos'
  });
}
