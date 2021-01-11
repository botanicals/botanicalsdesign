import React, { useState } from "react"

function ConsultationForm() {
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()

  function formSubmit(e) {
    e.preventDefault()
  }

  function subjectChange(e) {
    setSubject(e.target.value)
  }

  function messageChange(e) {
    setMessage(e.target.value)
  }

  function nameChange(e) {
    setName(e.target.value)
  }

  function phoneChange(e) {
    setPhone(e.target.value)
  }

  function emailChange(e) {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={formSubmit} class="retail-contact">
      <fieldset>
        <legend>Return Contact Info</legend>
        <label className="top">
          Name*
          <input
            onChange={nameChange}
            type="text"
            name="name"
            value={name}
            required
          />
        </label>
        <label className="top">
          Phone*
          <input
            onChange={phoneChange}
            type="tel"
            name="phone"
            value={phone}
            required
          />
        </label>
        <label className="top">
          Email*
          <input
            onChange={emailChange}
            type="email"
            name="email"
            value={email}
            required
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>About your Space</legend>

        <label className="top">
          Street Address
          <input
            onChange={subjectChange}
            type="text"
            name="subject"
            value={subject}
          />
        </label>
        <label className="top">
          City, State*
          <input
            onChange={subjectChange}
            type="text"
            name="subject"
            value={subject}
            required
          />
        </label>
        <label className="top">
          Zipcode
          <input
            onChange={subjectChange}
            type="text"
            name="subject"
            value={subject}
          />
        </label>

        <div>Residential or Commercial</div>
        <label class="sbs">
          <input type="radio" name="rescom" value="residential" /> Residential
        </label>
        <label class="sbs">
          <input type="radio" name="rescom" value="commercial" /> Commercial
        </label>

        <label className="top">
          Briefly describe your space*
          <textarea
            onChange={messageChange}
            name="message"
            value={message}
            required
            rows="8"
          />
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
