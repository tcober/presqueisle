import React, { Component } from 'react';
import FrontThumb from './Components/FrontThumbs/frontthumb.component'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8888/wp-json/wp/v2/posts")
      .then( response => response.json() )
      .then( responseData => {
        this.setState({ posts: responseData });
      })
      .catch(err => {
        alert(err);
      })
  }

  render() {
    return (
      <div className="App">
        <FrontThumb data={this.state.posts} />
      </div>
    );
  }
}

export default App;
