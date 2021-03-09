import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import "../sass/components/_convert-kit.scss"
import "../sass/components/_aweber.scss"

function SubscribeForm() {
  return (
    <form
      method="post"
      className="af-form-wrapper"
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
          defaultValue="https://www.aweber.com/thankyou-coi.htm?m=text"
          id="redirect_4490b58bf18d647c622bb975badbca2d"
        />
        <input type="hidden" name="meta_adtracking" defaultValue="Subscribe" />
        <input type="hidden" name="meta_message" defaultValue={1} />
        <input type="hidden" name="meta_required" defaultValue="name,email" />
        <input type="hidden" name="meta_tooltip" defaultValue />
      </div>
      <div id="af-form-668219434" className="af-form">
        <div id="af-body-668219434" className="af-body af-standards">
          <div className="af-element">
            <div className="bodyText">
              <p>
                <span
                  style={{
                    color: "#172b4d",
                    fontFamily: '"trebuchet ms", geneva',
                    fontSize: "24px",
                  }}
                >
                  Newsletter Subscription
                </span>
              </p>
            </div>
            <div className="af-clear" />
          </div>
          <div className="af-element">
            <label className="previewLabel" htmlFor="awf_field-111116909">
              Name:
            </label>
            <div className="af-textWrap">
              <input
                id="awf_field-111116909"
                type="text"
                name="name"
                className="text"
                defaultValue
                tabIndex={500}
              />
            </div>
            <div className="af-clear" />
          </div>
          <div className="af-element">
            <label className="previewLabel" htmlFor="awf_field-111116910">
              Email:
            </label>
            <div className="af-textWrap">
              <input
                className="text"
                id="awf_field-111116910"
                type="text"
                name="email"
                defaultValue
                tabIndex={501}
              />
            </div>
            <div className="af-clear" />
          </div>
          <div className="af-element af-element-checkbox">
            <div className="af-checkWrap">
              <input
                type="checkbox"
                defaultValue="yes"
                id="awf_field-111116911"
                className="checkbox"
                name="custom shipment-northern"
                tabIndex={502}
              />
              <label className="choice" htmlFor="awf_field-111116911">
                {" "}
                Shipment Notifications (Northern Utah)
              </label>
              <input
                type="hidden"
                name="tagif_custom shipment-northern"
                defaultValue="shipment notifications (northern utah)"
              />
            </div>
            <div className="af-clear" />
          </div>
          <div className="af-element af-element-checkbox">
            <div className="af-checkWrap">
              <input
                type="checkbox"
                defaultValue="yes"
                id="awf_field-111116912"
                className="checkbox"
                name="custom shipment-southern"
                tabIndex={503}
              />
              <label className="choice" htmlFor="awf_field-111116912">
                {" "}
                Shipment Notifications (Southern Utah)
              </label>
              <input
                type="hidden"
                name="tagif_custom shipment-southern"
                defaultValue="shipment notifications (southern utah)"
              />
            </div>
            <div className="af-clear" />
          </div>
          <div className="af-element af-element-checkbox">
            <div className="af-checkWrap">
              <input
                type="checkbox"
                defaultValue="yes"
                id="awf_field-111116913"
                className="checkbox"
                name="custom Professional Tips and Tricks"
                tabIndex={504}
              />
              <label className="choice" htmlFor="awf_field-111116913">
                {" "}
                Professional Tips and Tricks
              </label>
              <input
                type="hidden"
                name="tagif_custom Professional Tips and Tricks"
                defaultValue="professional tips and tricks"
              />
            </div>
            <div className="af-clear" />
          </div>
          <div className="af-element af-element-checkbox">
            <div className="af-checkWrap">
              <input
                type="checkbox"
                defaultValue="yes"
                id="awf_field-111116914"
                className="checkbox"
                name="custom updates_events_news"
                tabIndex={505}
              />
              <label className="choice" htmlFor="awf_field-111116914">
                {" "}
                Updates, Events &amp; News
              </label>
              <input
                type="hidden"
                name="tagif_custom updates_events_news"
                defaultValue="updates news and events"
              />
            </div>
            <div className="af-clear" />
          </div>
          <div className="af-element buttonContainer">
            <input
              name="submit"
              className="submit"
              type="submit"
              defaultValue="Submit"
              tabIndex={506}
            />
            <div className="af-clear" />
          </div>
          <div
            className="af-element privacyPolicy"
            style={{ textAlign: "center" }}
          >
            <p>
              We respect your{" "}
              <a
                title="Privacy Policy"
                href="https://www.aweber.com/permission.htm"
                target="_blank"
                rel="nofollow"
              >
                email privacy
              </a>
            </p>
            <div className="af-clear" />
          </div>
        </div>
        <div id="af-footer-668219434" className="af-footer">
          <div className="bodyText">
            <p>&nbsp;</p>
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

    // <iframe
    //   style={{ width: "100%", height: "500px" }}
    //   src="https://cdn.forms-content.sg-form.com/d11e982f-8044-11eb-bd43-f2eb58d9382f"
    // />
    // <>
    //   <script src="https://f.convertkit.com/ckjs/ck.5.js" />
    //   <form
    //     action="https://app.convertkit.com/forms/1665028/subscriptions"
    //     className="seva-form formkit-form"
    //     method="post"
    //     data-sv-form="1665028"
    //     data-uid="f1b30cf43c"
    //     data-format="inline"
    //     data-version="5"
    //     data-options='{"settings":{"after_subscribe":{"action":"redirect","success_message":"Success! Now check your email to confirm your subscription.\nVisit us at <a href=\"https://botanicalsdesign.com>botanicalsdesign.com</a>","redirect_url":"https://botanicalsdesign.com/newsletter/success"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
    //     min-width="400 500 600 700 800"
    //     style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: "6px" }}
    //   >
    //     <div data-style="full" className="remove-padding">
    //       <div
    //         data-element="column"
    //         className="formkit-column"
    //         style={{ backgroundColor: "rgb(255, 255, 255)" }}
    //       >
    //         <div
    //           className="formkit-background"
    //           style={{
    //             backgroundImage:
    //               "url('https://embed.filekitcdn.com/e/r8WimZgEaXoiQvUaegMqWq/2h4wyJJWSTk7dWk4YEVxbW')",
    //             opacity: "0.23",
    //           }}
    //         ></div>
    //         <div
    //           className="formkit-header"
    //           data-element="header"
    //           style={{
    //             color: "rgb(137, 35, 30)",
    //             fontSize: "31px",
    //             fontWeight: "700",
    //           }}
    //         >
    //           <h1 className="formkit-header__heading">
    //             NEWSLETTER SUBSCRIPTION
    //           </h1>
    //         </div>
    //         <div
    //           className="formkit-subheader"
    //           data-element="subheader"
    //           style={{ color: "rgb(0, 0, 0)", fontSize: "15px" }}
    //         >
    //           <p>We will never sell or share your information.</p>
    //         </div>
    //         <div
    //           className="formkit-image formkit-image relative focus:outline-none"
    //           role="button"
    //           tabIndex="0"
    //         >
    //           <img
    //             className="cursor-pointer focus:outline-blue "
    //             src="https://embed.filekitcdn.com/e/r8WimZgEaXoiQvUaegMqWq/4DoKystWj3Aumhq1hWiB3X"
    //             style={{ maxWidth: "100%" }}
    //             alt="botanicals"
    //           />
    //         </div>
    //       </div>
    //       <div data-element="column" className="formkit-column">
    //         <ul
    //           className="formkit-alert formkit-alert-error"
    //           data-element="errors"
    //           data-group="alert"
    //         ></ul>
    //         <div data-element="fields" className="seva-fields formkit-fields">
    //           <div className="formkit-field">
    //             <input
    //               className="formkit-input"
    //               aria-label="Name"
    //               name="fields[first_name]"
    //               required=""
    //               placeholder="Name"
    //               type="text"
    //               style={{
    //                 color: "rgb(0, 0, 0)",
    //                 borderColor: "rgb(227, 227, 227)",
    //                 borderRadius: "4px",
    //                 fontweight: "400",
    //               }}
    //             />
    //           </div>
    //           <div className="formkit-field">
    //             <input
    //               className="formkit-input"
    //               name="email_address"
    //               aria-label="Your email address"
    //               placeholder="Your email address"
    //               required=""
    //               type="email"
    //               style={{
    //                 color: "rgb(0, 0, 0)",
    //                 borderColor: "rgb(227, 227, 227)",
    //                 borderRadius: "4px",
    //                 fontWeight: "400",
    //               }}
    //             />
    //           </div>
    //           <div className="formkit-field">
    //             <div role="button" tabIndex="0">
    //               <fieldset
    //                 data-group="checkboxes"
    //                 className="formkit-6487"
    //                 type="Custom"
    //                 order="3"
    //                 save_as="Tag"
    //                 group="field"
    //               >
    //                 <legend
    //                   style={{ color: "rgb(0, 0, 0)", fontWeight: "400" }}
    //                 >
    //                   I want to recieve emails with:
    //                 </legend>
    //                 <div
    //                   className="formkit-checkboxes"
    //                   data-element="tags-checkboxes"
    //                   data-group="checkbox"
    //                   style={{
    //                     color: "rgb(0, 0, 0)",
    //                     borderColor: "rgb(227, 227, 227)",
    //                     borderRadius: "4px",
    //                     fontWeight: "400",
    //                   }}
    //                 >
    //                   <input
    //                     className="formkit-checkbox"
    //                     id="tag-20298694-2131965"
    //                     type="checkbox"
    //                     name="tags[]"
    //                     value="2131965"
    //                   />
    //                   <label htmlFor="tag-20298694-2131965">
    //                     Shipment Notifications (Northern Utah)
    //                   </label>
    //                 </div>
    //                 <div
    //                   className="formkit-checkboxes"
    //                   data-element="tags-checkboxes"
    //                   data-group="checkbox"
    //                   style={{
    //                     color: "rgb(0, 0, 0)",
    //                     borderColor: "rgb(227, 227, 227)",
    //                     borderRadius: "4px",
    //                     fontWeight: "400",
    //                   }}
    //                 >
    //                   <input
    //                     className="formkit-checkbox"
    //                     id="tag-20298694-2131966"
    //                     type="checkbox"
    //                     name="tags[]"
    //                     value="2131966"
    //                   />
    //                   <label htmlFor="tag-20298694-2131966">
    //                     Shipment Notifications (Southern Utah)
    //                   </label>
    //                 </div>
    //                 <div
    //                   className="formkit-checkboxes"
    //                   data-element="tags-checkboxes"
    //                   data-group="checkbox"
    //                   style={{
    //                     color: "rgb(0, 0, 0)",
    //                     borderColor: "rgb(227, 227, 227)",
    //                     borderRadius: "4px",
    //                     fontWeight: "400",
    //                   }}
    //                 >
    //                   <input
    //                     className="formkit-checkbox"
    //                     id="tag-20298694-2131967"
    //                     type="checkbox"
    //                     name="tags[]"
    //                     value="2131967"
    //                   />
    //                   <label htmlFor="tag-20298694-2131967">
    //                     Professional Tips &amp; Tricks
    //                   </label>
    //                 </div>
    //                 <div
    //                   className="formkit-checkboxes"
    //                   data-element="tags-checkboxes"
    //                   data-group="checkbox"
    //                   style={{
    //                     color: "rgb(0, 0, 0)",
    //                     borderColor: "rgb(227, 227, 227)",
    //                     borderRadius: "4px",
    //                     fontWeight: "400",
    //                   }}
    //                 >
    //                   <input
    //                     className="formkit-checkbox"
    //                     id="tag-20298694-2131968"
    //                     type="checkbox"
    //                     name="tags[]"
    //                     value="2131968"
    //                   />
    //                   <label htmlFor="tag-20298694-2131968">
    //                     Updates, Events &amp; News
    //                   </label>
    //                 </div>
    //               </fieldset>
    //             </div>
    //           </div>
    //           <button
    //             data-element="submit"
    //             className="formkit-submit formkit-submit"
    //             style={{
    //               color: "rgb(255, 255, 255)",
    //               backgroundColor: "rgb(119, 0, 12)",
    //               borderRadius: "4px",
    //               fontWeight: "400",
    //             }}
    //           >
    //             <div className="formkit-spinner">
    //               <div></div>
    //               <div></div>
    //               <div></div>
    //             </div>
    //             <span className="">SUBSCRIBE</span>
    //           </button>
    //         </div>
    //         <div
    //           className="formkit-guarantee"
    //           data-element="guarantee"
    //           style={{
    //             color: "rgb(77, 77, 77)",
    //             fontSize: "13px",
    //             fontWeight: "400",
    //           }}
    //         >
    //           <p>We respect your privacy. Unsubscribe at any time.</p>
    //         </div>
    //         <div className="formkit-powered-by-convertkit-container">
    //           <OutboundLink
    //             href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
    //             data-element="powered-by"
    //             className="formkit-powered-by-convertkit"
    //             data-variant="dark"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             Built with ConvertKit
    //           </OutboundLink>
    //         </div>
    //       </div>
    //     </div>
    //   </form>
    // </>
  )
}

export default SubscribeForm
