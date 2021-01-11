import React from "react"
import { Link } from "gatsby"

const Post = props => (
  <div className="blog__card">
    <img src={props.image} alt="" />
    <div className="blog__details">
      <h2>{props.title}</h2>
      <p>
        by {props.author} | {props.date}
      </p>
      <p>{props.excerpt}</p>
      <Link className="blog__read-more" href={props.readMore}>
        Read More &rarr;
      </Link>
    </div>
  </div>
)

export default Post
