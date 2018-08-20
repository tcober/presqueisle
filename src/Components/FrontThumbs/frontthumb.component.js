import React from 'react';
import { Link } from 'react-router-dom';
import { Route }from 'react-router-dom';
import  Post from '../Posts/post.component'


const FrontThumb = props => {

      let thumbs = props.data.map(post => {

        const postDate = new Date(post.date);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = postDate.toDateString('en', options);

        return <div className="cover-image" key={post.id}>
          <div className="title-holder">
              <Link to={post.link.replace("http://localhost:8888/", "")}><h3 className="post-title">{post.title.rendered}</h3></Link>
              <p className="date">{formattedDate}</p>
          </div>
          <img alt={post.title} className="poster" src={post.acf.featured_picture} />
          <Route exact path={post.link.replace("http://localhost:8888/", "")} render={ () => <Post data={post.content} /> } />
        </div>
      });

    return (
        <div className="front">
          <Link to="/"><h1 className="site-title">Living in Presque Isle Wisconsin</h1></Link>
          <div className="images">
            {thumbs}
          </div>
        </div>
    )
}

export default FrontThumb;
