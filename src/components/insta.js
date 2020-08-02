import React from "react"
import "@ptkdev/webcomponent-instagram-widget"

const InstaWidget = () => {
  return (
    <section className="container insta_box">
      <h3>join us on instagram</h3>
      <instagram-widget
        username="@teama.pro"
        grid="4x4"
        border-spacing="10px"
      />
    </section>
  )
}

export default InstaWidget