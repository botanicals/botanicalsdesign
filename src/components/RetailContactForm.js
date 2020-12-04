import React, { useState } from "react"

function RetailContactForm(props) {
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()

  function formSubmit(e) {
    e.preventDefault()
    const location = props.location
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
        <legend>Sender Info</legend>
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
          Phone
          <input onChange={phoneChange} type="tel" name="phone" value={phone} />
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
        <legend>Message Info</legend>

        <label className="top">
          Subject*
          <input
            onChange={subjectChange}
            type="text"
            name="subject"
            value={subject}
            required
          />
        </label>
        <label className="top">
          Message*
          <textarea
            onChange={messageChange}
            name="message"
            value={message}
            required
            rows="12"
          />
        </label>

        <input
          className="submit submit--contact"
          type="submit"
          value="Send My Message"
        />
      </fieldset>
    </form>
  )
}

export default RetailContactForm
