import React from "react"

function SubscribeForm() {
  return (
    <form
      method="post"
      className="af-form-wrapper subscription-form"
      acceptCharset="UTF-8"
      action="https://www.aweber.com/scripts/addlead.pl"
    >
      <div style={{ display: "none" }}>
        <input type="hidden" name="meta_web_form_id" defaultValue={668219434} />
        <input type="hidden" name="meta_split_id" defaultValue />
        <input type="hidden" name="listname" defaultValue="awlist5965964" />
        <input
          type="hidden"
          name="redirect"
          defaultValue="https://botanicalsdesign.com/newsletter/success"
          id="redirect_44dba7be5f6b61b626aa99d76644c09c"
        />
        <input
          type="hidden"
          name="meta_adtracking"
          defaultValue="Newsletter_Subscription"
        />
        <input type="hidden" name="meta_message" defaultValue={1001} />
        <input type="hidden" name="meta_required" defaultValue="name,email" />
        <input type="hidden" name="meta_tooltip" defaultValue />
      </div>
      <div id="af-form-668219434" className="af-form">
        <div id="af-body-668219434" className="af-body af-standards">
          <div className="af-element">
            <div className="bodyText">
              <p style={{ textAlign: "left" }}>
                <span
                  style={{
                    color: "#172b4d",
                    fontFamily: '"trebuchet ms", geneva',
                    fontSize: "24px",
                  }}
                >
                  BOTANICALS NEWSLETTER SUBSCRIPTION
                </span>
              </p>
              <p style={{ textAlign: "left" }}>
                <span
                  style={{
                    color: "#172b4d",
                    fontFamily: '"trebuchet ms", geneva',
                    fontSize: "13px",
                  }}
                >
                  <span
                    style={{ color: "#000000", textTransform: "uppercase" }}
                  >
                    WE WILL NEVER SELL OR SHARE YOUR INFORMATION. wE RESPECT
                    YOUR PRIVACY. UNSUBSCRIBE AT ANY TIME.
                  </span>
                </span>
              </p>
            </div>
            <div className="af-clear" />
          </div>
          <div className="af-element">
            <label className="previewLabel" htmlFor="awf_field-111280294">
              NAME:{" "}
            </label>
            <div className="af-textWrap">
              <input
                id="awf_field-111280294"
                type="text"
                name="name"
                className="text"
                onfocus=" if (this.value == '') { this.value = ''; }"
                onblur="if (this.value == '') { this.value='';} "
                tabIndex={500}
              />
            </div>
            <div className="af-clear" />
          </div>
          <div className="af-element">
            <label className="previewLabel" htmlFor="awf_field-111280295">
              EMAIL:{" "}
            </label>
            <div className="af-textWrap">
              <input
                className="text"
                id="awf_field-111280295"
                type="text"
                name="email"
                tabIndex={501}
                onfocus=" if (this.value == '') { this.value = ''; }"
                onblur="if (this.value == '') { this.value='';} "
              />
            </div>
            <div className="af-clear" />
          </div>
          <div className="af-element buttonContainer">
            <input
              name="submit"
              className="submit"
              type="submit"
              defaultValue="SUBSCRIBE"
              value="SUBSCRIBE"
              tabIndex={502}
            />
            <div className="af-clear" />
          </div>
          <div className="af-element tag" style={{ display: "none" }}>
            <input
              id="awf_tag-111280297"
              type="hidden"
              name="tag_111280297"
              defaultValue="newsletter subscriber"
            />
          </div>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <img
          src="https://forms.aweber.com/form/displays.htm?id=bGwcTIycLMws"
          alt=""
        />
      </div>
    </form>
  )
}

export default SubscribeForm
