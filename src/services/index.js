const httpBack = require('../http');

export function getNewStoriesIds() {
  return httpBack({
    method: 'GET',
    url: 'newstories.json'
  });
}

export function getNewStory(id) {
  return httpBack({
    method: 'GET',
    url: 'item/' + id + '.json'
  });
}
