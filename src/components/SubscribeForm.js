import { Link } from "gatsby"
import React, { useState } from "react"

//import Spinner from "./Spinner"

function SubscribeForm(props) {
  const [formSending, setFormSending] = useState(false)

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [shipments, setShipments] = useState(true)
  const [updates, setUpdates] = useState(true)

  function formSubmit(e) {
    e.preventDefault()
    setFormSending(true)
    console.log(formSending)
    alert(name + email)
    console.log(shipments)
    console.log(updates)
  }

  function nameChange(e) {
    setName(e.target.value)
  }

  function emailChange(e) {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={formSubmit} className={props.className}>
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
        <label className="top">
          Name
          <input
            onChange={nameChange}
            type="text"
            name="name"
            value={name}
            required
          />
        </label>
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

        <input className="submit" type="submit" value="Sign Me Up" />
      </fieldset>
    </form>
  )
}

export default SubscribeForm
