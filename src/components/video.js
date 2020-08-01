import React from "react"
import BgVideo from "../video/bg.mp4"

const Video = () => {
  return (
    <div className="intro">
      <video autoplay="true" mute="true" id="myVideo">
        <source src={BgVideo} type="video/mp4" />
        <track
          default
          kind="captions"
          srclang="en"
          src="/media/examples/friday.vtt"
        />
      </video>
    </div>
  )
} 

export default Video