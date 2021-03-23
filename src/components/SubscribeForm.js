import React, { useEffect } from "react"

function SubscribeForm() {
  useEffect(() => {
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = "//forms.aweber.com/form/34/668219434.js"
      fjs.parentNode.insertBefore(js, fjs)
    })(document, "script", "aweber-wjs-anqda5p2d")
  }, [])

  return <div className="AW-Form-668219434 subscription-form"></div>
}

export default SubscribeForm
