import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

const Post = props => {
  var getSpecificPost = new Promise(function(resolve) {
    let postName = props.match.params.postname;
    resolve(_.find(props.data.posts, ["slug", postName]));
  });

  var renderHTML = () => {
    getSpecificPost.then(response => {
      let container = document.querySelector(".post");
      return container !== undefined && response !== undefined
        ? (container.innerHTML = response.content.rendered)
        : "";
    });
  };

  return (
    <div className="post-container">
      <Link to="/">
        <h1 className="site-title">Living in Presque Isle Wisconsin</h1>
      </Link>
      <div onLoad={renderHTML()} className="post" />
    </div>
  );
};

export default Post;
