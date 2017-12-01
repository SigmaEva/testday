import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header';
import TodoList from './components/TodoList';

require('./styles/main.scss');

const element = document.getElementById('app');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: props.news,
    };
  }

  render() {
    return(
      <div>
        <Header/>
        <TodoList/>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App}/>
 </BrowserRouter>
  , element);

module.hot.accept();
