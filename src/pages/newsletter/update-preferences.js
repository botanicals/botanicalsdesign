import React from "react"

import "../../styles/main.scss"

import UpdatePreferencesForm from "../../components/UpdatePreferencesForm"
import SEO from "../../components/SEO"

export default () => {
  const seo = {
    title: "Update Newsletter Preferences | Botanicals Design",
    description:
      "Update your newsletter notification preferences and choose exactly what communications you want to recieve from us.",
    imagePath: "/heroes/blog-small-1x.jpg",
    urlPath: "/newsletter/update-preferences",
  }

  return (
    <>
      <SEO config={seo} />
      <div className="full-page">
        <UpdatePreferencesForm />
      </div>
    </>
  )
}
