import React from "react"
import { Link } from "gatsby"

function UnsubscribeForm(props) {
  return (
    <form
      method="post"
      action="/newsletter/success"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="unsubscribe"
      className={props.className}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="unsubscribe" />
      <div className="img-container">
        <Link to="/">
          <img src="/assets/logos/botanicals-logo.png" alt="botanicals logo" />
        </Link>
      </div>

      <fieldset>
        <h3 className="heading heading__h3 heading__h3--red">
          Mailing List Unsubscription
        </h3>

        <label>
          *We will <strong>never</strong> share or sell your information.
          <br />
          <br />
          Enter your subscribed email below to change your settings.
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
          />{" "}
          Shipment Notifications (Northern Utah)
        </label>
        <label className="sbs">
          <input
            type="checkbox"
            name="shipment-updates-southern-utah"
            value="yes"
          />{" "}
          Shipment Notifications (Southern Utah)
        </label>
        <label className="sbs">
          <input type="checkbox" name="tips-and-tricks" value="yes" />{" "}
          Professional Tips &amp; Tricks
        </label>
        <label className="sbs">
          <input type="checkbox" name="updates-and-news" value="yes" /> Updates
          &amp; News
        </label>

        <input className="submit" type="submit" value="Save Changes" />
      </fieldset>
    </form>
  )
}

export default UnsubscribeForm
