import React from "react"
import { Link } from "gatsby"

const Button = props => {
  if (props.href) {
    return (
      <Link
        className={`button ${props.inverse && "button--inverse"}`}
        to={props.href}
        {...props}
      >
        {props.children} <strong>&#8811;</strong>
      </Link>
    )
  }
  return "must include an href or to prop"
  // if (props.to) {
  //   return (
  //     <Link
  //       to={props.to}
  //       exact={props.exact}
  //       className={`button ${props.inverse && "button--inverse"}`}
  //     >
  //       {props.children}
  //     </Link>
  //   )
  // }
}

export default Button
