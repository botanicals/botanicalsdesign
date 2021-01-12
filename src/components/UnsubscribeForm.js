import React from "react"
import { Link } from "gatsby"

function UnsubscribeForm(props) {
  return (
    <form
      method="post"
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
        <p>Enter your subscribed email below to change your settings.</p>
        <label className="top">
          Email
          <input type="email" name="email" required />
        </label>

        <div>I want to recieve emails with</div>
        <label className="sbs">
          <input type="checkbox" name="shipments" value="shipments" /> Shipment
          Notifications
        </label>
        <label className="sbs">
          <input type="checkbox" name="updates" /> Updates &amp; News
        </label>
        <label className="sbs">
          <input type="checkbox" name="updates" /> Unsubscribe from all
          communications
        </label>

        <input className="submit" type="submit" value="Save Changes" />
      </fieldset>
    </form>
  )
}

export default UnsubscribeForm
