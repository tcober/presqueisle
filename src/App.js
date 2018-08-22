import React, { Component } from "react";
import FrontThumb from "./Components/FrontThumbs/frontthumb.component";
import ScrollToTop from "./Components/ScrollToTop/scrolltop.component";
import Post from "./Components/Posts/post.component";
import "./app.css";
import { BrowserRouter, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

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
    let history = createHistory();
    history.listen((location, action) => {
      window.scrollTo(0, 0);
    });
  }

  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
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
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
