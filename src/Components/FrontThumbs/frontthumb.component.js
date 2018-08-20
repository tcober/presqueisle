import React from 'react';
import { Link } from 'react-router-dom';

const FrontThumb = props => {

      let thumbs = props.data.map(post => {

        const postDate = new Date(post.date);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = postDate.toDateString('en', options);
        const image = post.acf.featured_picture ? post.acf.featured_picture :'http://presqueisle.boxboxboxbox.com/wp-content/uploads/2018/08/zubHkbvTRmNIa11hjkp4Q-e1534789579203.jpg';

        return <div className="cover-image" key={post.id}>
          <div className="title-holder">
              <Link to={post.link.replace("http://presqueisle.boxboxboxbox.com", "")}><h3 className="post-title">{post.title.rendered}</h3></Link>
              <p className="date">{formattedDate}</p>
          </div>
          <img alt={post.title} className="poster" src={image} />
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
