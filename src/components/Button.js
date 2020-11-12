import React from "react"

const Button = props => {
  if (props.href) {
    return (
      <button
        className={`button ${props.inverse && "button--inverse"}`}
        href={props.href}
      >
        {props.children}
      </button>
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
