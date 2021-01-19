import React from "react"
import { Link } from "gatsby"

function SubscribeForm(props) {
  return (
    <form
      method="post"
      action="/newsletter/success"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="subscribe"
      className={props.className}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="subscribe" />
      {props.className && (
        <div className="img-container">
          <Link to="/">
            <img
              src="/assets/logos/botanicals-logo.png"
              alt="botanicals logo"
            />
          </Link>
        </div>
      )}
      <fieldset>
        <h3 className="heading heading__h3 heading__h3--red">
          Newsletter Subscription
        </h3>
        <label>
          *We will <strong>never</strong> share or sell your information.
        </label>
        <label className="top">
          Name
          <input type="text" name="name" required />
        </label>
        <label className="top">
          Email
          <input type="email" name="email" required />
        </label>

        <div>I want to recieve emails with:</div>
        <label className="sbs">
          <input
            type="checkbox"
            name="shipment-updates-northern-utah"
            value="yes"
            checked
          />{" "}
          Shipment Notifications (Northern Utah)
        </label>
        <label className="sbs">
          <input
            type="checkbox"
            name="shipment-updates-southern-utah"
            value="yes"
            checked
          />{" "}
          Shipment Notifications (Southern Utah)
        </label>
        <label className="sbs">
          <input type="checkbox" name="tips-and-tricks" value="yes" checked />{" "}
          Professional Tips &amp; Tricks
        </label>
        <label className="sbs">
          <input type="checkbox" name="updates-and-news" value="yes" checked />{" "}
          Updates &amp; News
        </label>

        <input className="submit" type="submit" value="Sign Me Up" />
      </fieldset>
    </form>
  )
}

export default SubscribeForm
