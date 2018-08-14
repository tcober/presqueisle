import React, { Component } from 'react';
import FrontThumb from './Components/FrontThumbs/frontthumb.component'
import './app.css';
import { BrowserRouter, Route }from 'react-router-dom';

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
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" render={ () => <FrontThumb data={this.state.posts} /> } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
