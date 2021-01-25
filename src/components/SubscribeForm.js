import React, { useState } from "react"
import { Link } from "gatsby"

function SubscribeForm(props) {
  const FORM_ACTION = "https://app.convertkit.com/forms/1665028/subscriptions"

  const [northern, setNorthern] = useState(true)
  const [southern, setSouthern] = useState(true)
  const [professional, setProfessional] = useState(true)
  const [updates, setUpdates] = useState(true)

  const handleCheck = name => {
    switch (name) {
      case "northern":
        setNorthern(!northern)
        break
      case "southern":
        setSouthern(!southern)
        break
      case "professional":
        setProfessional(!professional)
        break
      case "updates":
        setUpdates(!updates)
        break
      default:
        break
    }
  }

  return (
    <form
      method="post"
      action={FORM_ACTION}
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
          <input type="text" name="first_name" required />
        </label>
        <label className="top">
          Email
          <input type="email" name="email_address" required />
        </label>

        <div>I want to recieve emails with:</div>

        <fieldset
          data-group="checkboxes"
          class="formkit-6487"
          type="Custom"
          order="3"
          save_as="Tag"
          group="field"
        >
          <div
            class="formkit-checkboxes"
            data-element="tags-checkboxes"
            data-group="checkbox"
          >
            <label for="tag-20298694-2131965" className="sbs">
              <input
                className="formkit-checkbox"
                id="tag-20298694-2131965"
                type="checkbox"
                name="tags[]"
                value="2131965"
                checked={northern}
                onClick={() => handleCheck("northern")}
              />
              Shipment Notifications (Northern Utah)
            </label>
          </div>

          <div
            class="formkit-checkboxes"
            data-element="tags-checkboxes"
            data-group="checkbox"
          >
            <label for="tag-20298694-2131966" className="sbs">
              <input
                className="formkit-checkbox"
                id="tag-20298694-2131966"
                type="checkbox"
                name="tags[]"
                value="2131966"
                checked={southern}
                onClick={() => handleCheck("southern")}
              />
              Shipment Notifications (Southern Utah)
            </label>
          </div>

          <div
            className="formkit-checkboxes"
            data-element="tags-checkboxes"
            data-group="checkbox"
          >
            <label for="tag-20298694-2131967" className="sbs">
              <input
                className="formkit-checkbox"
                id="tag-20298694-2131967"
                type="checkbox"
                name="tags[]"
                value="2131967"
                checked={professional}
                onClick={() => handleCheck("professional")}
              />
              Professional Tips &amp; Tricks
            </label>
          </div>

          <div
            className="formkit-checkboxes"
            data-element="tags-checkboxes"
            data-group="checkbox"
          >
            <label for="tag-20298694-2131968" className="sbs">
              <input
                className="formkit-checkbox"
                id="tag-20298694-2131968"
                type="checkbox"
                name="tags[]"
                value="2131968"
                checked={updates}
                onClick={() => handleCheck("updates")}
              />
              Updates, Events &amp; News
            </label>
          </div>
        </fieldset>

        {/* <label className="sbs">
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
        </label> */}

        <input className="submit" type="submit" value="Sign Me Up" />
      </fieldset>
    </form>
  )
}

export default SubscribeForm
