import React from 'react';
import * as news from '../../services';
require('./newsfeed.scss');




class Newsfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    this.getAllStories();
  }

  getAllStories() {
    return news.getNewStoriesIds()
      .then(({ data, error }) => {
        if (error) {
          return null;
        }
        this.getStory(data)
      });
  }

  getStory(stories) {
    var self = this;
    stories.map(function(i){
      return news.getNewStory(i)
        .then(({ data, error }) => {
          if (error) {
            return null;
          }
          self.setState({stories : self.state.stories.concat(data)});
        })
    })
  }



  render() {
    return (
      <div className="newsfeed">
        <ul>
          {this.state.stories.map(function(story, i){
              return <li key={i}><a href={story.url} key={story.id} title={story.title}>{story.title}</a></li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Newsfeed;
