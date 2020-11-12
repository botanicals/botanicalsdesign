import React from "react"

function ContentContainer(props) {
  return (
    <main className="main__content-container">
      <h1 class="heading heading__h1">{props.pageHeading}</h1>
      {props.children}
    </main>
  )
}

export default ContentContainer
