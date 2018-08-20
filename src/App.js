import React, { Component } from "react";
import FrontThumb from "./Components/FrontThumbs/frontthumb.component";
import Post from "./Components/Posts/post.component";
import "./app.css";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      routes: []
    };
  }
  // Store the route to a given post
  // Display that post

  componentDidMount() {
    fetch("http://presqueisle.boxboxboxbox.com/wp-json/wp/v2/posts")
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          posts: responseData
        });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route
            exact
            path="/"
            render={() => <FrontThumb data={this.state.posts} />}
          />
          <Route
            path="/:post/:month/:day/:postname"
            render={
              this.state
                ? ({ match }) => <Post match={match} data={this.state} />
                : null
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
