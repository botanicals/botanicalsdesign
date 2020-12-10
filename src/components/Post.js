import React from "react"

import Button from "./Button"

const Post = props => (
  <div className="blog__card">
    <img src={props.image} />
    <div className="blog__details">
      <h2>{props.title}</h2>
      <p>{props.excerpt}</p>
      <a className="blog__read-more" href={props.readMore}>
        Read More &rarr;
      </a>
    </div>
  </div>
)

export default Post
