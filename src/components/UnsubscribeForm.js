import { Link } from "gatsby"
import React, { useState } from "react"

function UnsubscribeForm(props) {
  const [email, setEmail] = useState()
  const [shipments, setShipments] = useState(true)
  const [updates, setUpdates] = useState(true)
  const [unsub, setUnsub] = useState(false)

  function formSubmit(e) {
    e.preventDefault()
    alert(email)
    console.log(shipments)
    console.log(updates)

    window.location.replace("/")
  }

  function unsubChange(e) {
    setUnsub(true)
    setShipments(false)
    setUpdates(false)
  }

  function emailChange(e) {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={formSubmit} className={props.className}>
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
          <input
            onChange={emailChange}
            type="email"
            name="email"
            value={email}
            required
          />
        </label>

        <div>I want to recieve emails with</div>
        <label className="sbs">
          <input
            onChange={() =>
              shipments ? setShipments(false) : setShipments(true)
            }
            type="checkbox"
            name="shipments"
            value={updates}
            checked={shipments}
          />{" "}
          Shipment Notifications
        </label>
        <label className="sbs">
          <input
            onChange={() => (updates ? setUpdates(false) : setUpdates(true))}
            type="checkbox"
            name="updates"
            value={updates}
            checked={updates}
          />{" "}
          Updates &amp; News
        </label>
        <label className="sbs">
          <input
            onChange={unsubChange}
            type="checkbox"
            name="updates"
            value={unsub}
            checked={unsub}
          />{" "}
          Unsubscribe from all communications
        </label>

        <input className="submit" type="submit" value="Save Changes" />
      </fieldset>
    </form>
  )
}

export default UnsubscribeForm
