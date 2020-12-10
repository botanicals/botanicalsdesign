import React from "react"

import Button from "./Button"

const Post = props => (
  <div className="p-3">
    <div>
      <img src={props.image} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.excerpt}</p>
        <a href={props.readMore}>Read More...</a>
      </div>
    </div>
  </div>
)

export default Post
