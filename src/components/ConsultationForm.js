import React from "react"

function ConsultationForm() {
  return (
    <form
      netlify
      method="POST"
      name="consultation_request"
      class="retail-contact"
    >
      <fieldset>
        <legend>Return Contact Info</legend>
        <label className="top">
          Name*
          <input type="text" name="name" required />
        </label>
        <label className="top">
          Phone*
          <input type="tel" name="phone" required />
        </label>
        <label className="top">
          Email*
          <input type="email" name="email" required />
        </label>
      </fieldset>
      <fieldset>
        <legend>About your Space</legend>

        <label className="top">
          Street Address
          <input type="text" name="address1" />
        </label>
        <label className="top">
          City, State*
          <input type="text" name="address2" required />
        </label>
        <label className="top">
          Zipcode
          <input type="text" name="address3" />
        </label>

        <div>I am interested in a design for a:</div>
        <label class="sbs">
          <input type="radio" name="space-type" value="residential" />{" "}
          Residential Space
        </label>
        <label class="sbs">
          <input type="radio" name="space-type" value="commercial" /> Commercial
          Space
        </label>

        <div>I am already working with:</div>
        <label class="sbs">
          <input type="check" name="working-with" value="architect" /> Architect
        </label>
        <label class="sbs">
          <input type="check" name="working-with" value="interiordesigner" />{" "}
          Interior Designer
        </label>
        <label class="sbs">
          <input type="check" name="working-with" value="landscaper" />{" "}
          Landscaper
        </label>
        <label class="sbs">
          <input type="check" name="working-with" value="none" /> None
        </label>

        <label className="top">
          Briefly describe your space*
          <textarea name="space-description" required rows="8" />
        </label>

        <input
          className="submit submit--contact"
          type="submit"
          value="Send My Consultation Request"
        />
      </fieldset>
    </form>
  )
}

export default ConsultationForm
