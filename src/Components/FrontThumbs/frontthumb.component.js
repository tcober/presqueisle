import React from 'react';

const FrontThumb = props => {
    const posts = props.data;
    let thumbs = posts.map(post => {
        return <div key={post.id} className="poster" dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>;
    });

    return (
      <div className="hello">
        <div className="container">{thumbs}</div>
      </div>
    )
}

export default FrontThumb;
