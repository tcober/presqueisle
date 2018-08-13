import React from 'react';

const FrontThumb = props => {
    const posts = props.data;

    let thumbs = posts.map(post => {

      const postDate = new Date(post.date);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = postDate.toDateString('en', options);

      return <div className="cover-image" key={post.id}>
        <div className="title-holder">
          <h3 className="post-title">{post.title.rendered}</h3>
          <p className="date">{formattedDate}</p>
        </div>
        <img alt={post.title} className="poster" src={post.acf.featured_picture} />
      </div>
    });

    return (
      <div className="images">
        {thumbs}
      </div>
    )
}

export default FrontThumb;
