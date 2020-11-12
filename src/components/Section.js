import React from "react"

function Section(props) {
  return (
    <section
      className={
        props.fullWidth
          ? "main__section main__section--full-width"
          : "main__section"
      }
    >
      {props.fullWidth ? (
        <div className="main__section__full-width-content-container">
          <h2 class="heading heading__h2">{props.sectionHeading}</h2>
          {props.children}
        </div>
      ) : (
        <>
          <h2 class="heading heading__h2">{props.sectionHeading}</h2>
          {props.children}
        </>
      )}
    </section>
  )
}

export default Section
