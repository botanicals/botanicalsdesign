import React from "react"
import { Redirect } from "react-router-dom"

function UpdatePreferencesForm() {
  const onSubmit = e => {
    //e.preventDefault()
    console.log("submitted")
    return <Redirect to="/newsletter/update-preferences" />
  }

  return (
    <>
      <script src="https://f.convertkit.com/ckjs/ck.5.js" />
      <form
        method="post"
        action="/newsletter/update-successful"
        onSubmit={onSubmit}
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="Update Newsletter Preferences"
        className="seva-form formkit-form"
        data-sv-form="1665028"
        data-uid="f1b30cf43c"
        data-format="inline"
        data-version="5"
        min-width="400 500 600 700 800"
        style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: "6px" }}
      >
        <input type="hidden" name="bot-field" />
        <input
          type="hidden"
          name="form-name"
          value="Update Newsletter Preferences"
        />
        <div data-style="full" className="remove-padding">
          <div
            data-element="column"
            className="formkit-column"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <div
              className="formkit-background"
              style={{
                backgroundImage:
                  "url('https://embed.filekitcdn.com/e/r8WimZgEaXoiQvUaegMqWq/2h4wyJJWSTk7dWk4YEVxbW')",
                opacity: "0.23",
              }}
            ></div>
            <div
              className="formkit-header"
              data-element="header"
              style={{
                color: "rgb(137, 35, 30)",
                fontSize: "31px",
                fontWeight: "700",
              }}
            >
              <h1 className="formkit-header__heading">
                NEWSLETTER SUBSCRIPTION SETTINGS
              </h1>
            </div>
            <div
              className="formkit-subheader"
              data-element="subheader"
              style={{ color: "rgb(0, 0, 0)", fontSize: "15px" }}
            >
              <p>Update Your Mailing List Preferences.</p>
              <p>We will never sell or share your information.</p>
              <p>
                Enter your subscribed email to choose your notification
                settings.
              </p>
            </div>
            <div
              className="formkit-image formkit-image relative focus:outline-none"
              role="button"
              tabIndex="0"
            >
              <img
                className="cursor-pointer focus:outline-blue "
                src="https://embed.filekitcdn.com/e/r8WimZgEaXoiQvUaegMqWq/4DoKystWj3Aumhq1hWiB3X"
                style={{ maxWidth: "100%" }}
                alt="botanicals"
              />
            </div>
          </div>
          <div data-element="column" className="formkit-column">
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            ></ul>
            <div data-element="fields" className="seva-fields formkit-fields">
              {/* <div className="formkit-field">
                <input
                  className="formkit-input"
                  aria-label="Name"
                  name="fields[first_name]"
                  required=""
                  placeholder="Name"
                  type="text"
                  style={{
                    color: "rgb(0, 0, 0)",
                    borderColor: "rgb(227, 227, 227)",
                    borderRadius: "4px",
                    fontweight: "400",
                  }}
                />
              </div> */}
              <div className="formkit-field">
                <input
                  className="formkit-input"
                  name="email_address"
                  aria-label="Your email address"
                  placeholder="Your email address"
                  required=""
                  type="email"
                  style={{
                    color: "rgb(0, 0, 0)",
                    borderColor: "rgb(227, 227, 227)",
                    borderRadius: "4px",
                    fontWeight: "400",
                  }}
                />
              </div>
              <div className="formkit-field">
                <div role="button" tabIndex="0">
                  <fieldset
                    data-group="checkboxes"
                    className="formkit-6487"
                    type="Custom"
                    order="3"
                    save_as="Tag"
                    group="field"
                  >
                    <legend
                      style={{ color: "rgb(0, 0, 0)", fontWeight: "400" }}
                    >
                      I want to recieve emails with:
                    </legend>
                    <div
                      className="formkit-checkboxes"
                      data-element="tags-checkboxes"
                      data-group="checkbox"
                      style={{
                        color: "rgb(0, 0, 0)",
                        borderColor: "rgb(227, 227, 227)",
                        borderRadius: "4px",
                        fontWeight: "400",
                      }}
                    >
                      <input
                        className="formkit-checkbox"
                        id="tag-20298694-2131965"
                        type="checkbox"
                        name="tags[]"
                        value="2131965-shipment-updates-northern-utah"
                      />
                      <label htmlFor="tag-20298694-2131965">
                        Shipment Notifications (Northern Utah)
                      </label>
                    </div>
                    <div
                      className="formkit-checkboxes"
                      data-element="tags-checkboxes"
                      data-group="checkbox"
                      style={{
                        color: "rgb(0, 0, 0)",
                        borderColor: "rgb(227, 227, 227)",
                        borderRadius: "4px",
                        fontWeight: "400",
                      }}
                    >
                      <input
                        className="formkit-checkbox"
                        id="tag-20298694-2131966"
                        type="checkbox"
                        name="tags[]"
                        value="2131966-shipment-updates-southern-utah"
                      />
                      <label htmlFor="tag-20298694-2131966">
                        Shipment Notifications (Southern Utah)
                      </label>
                    </div>
                    <div
                      className="formkit-checkboxes"
                      data-element="tags-checkboxes"
                      data-group="checkbox"
                      style={{
                        color: "rgb(0, 0, 0)",
                        borderColor: "rgb(227, 227, 227)",
                        borderRadius: "4px",
                        fontWeight: "400",
                      }}
                    >
                      <input
                        className="formkit-checkbox"
                        id="tag-20298694-2131967"
                        type="checkbox"
                        name="tags[]"
                        value="2131967-professional-tips-and-tricks"
                      />
                      <label htmlFor="tag-20298694-2131967">
                        Professional Tips &amp; Tricks
                      </label>
                    </div>
                    <div
                      className="formkit-checkboxes"
                      data-element="tags-checkboxes"
                      data-group="checkbox"
                      style={{
                        color: "rgb(0, 0, 0)",
                        borderColor: "rgb(227, 227, 227)",
                        borderRadius: "4px",
                        fontWeight: "400",
                      }}
                    >
                      <input
                        className="formkit-checkbox"
                        id="tag-20298694-2131968"
                        type="checkbox"
                        name="tags[]"
                        value="2131968-updates-news-and-events"
                      />
                      <label htmlFor="tag-20298694-2131968">
                        Updates, Events &amp; News
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>
              <button
                data-element="submit"
                type="submit"
                className="formkit-submit formkit-submit"
                style={{
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgb(119, 0, 12)",
                  borderRadius: "4px",
                  fontWeight: "400",
                }}
              >
                <div className="formkit-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <span className="">UPDATE PREFERENCES</span>
              </button>
            </div>
            <div
              className="formkit-guarantee"
              data-element="guarantee"
              style={{
                color: "rgb(77, 77, 77)",
                fontSize: "13px",
                fontWeight: "400",
              }}
            >
              <p>We respect your privacy. Unsubscribe at any time.</p>
            </div>
            <div className="formkit-powered-by-convertkit-container">
              <a
                href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
                data-element="powered-by"
                className="formkit-powered-by-convertkit"
                data-variant="dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Built with ConvertKit
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default UpdatePreferencesForm
