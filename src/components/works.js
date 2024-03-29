import React from "react"

const WorkItem = props => {
  return (
    <div className="video_item container">
      <h3>{props.title}</h3>
      <a className="video360" href={props.link}>
        <picture>
          <img srcSet={props.image} alt="work" />
          <source srcSet={props.im_s} media="(max-width: 600px)" />
          <source
            srcSet={props.img_m}
            media="(max-width: 800px) and (max-width: 800px)"
          />
        </picture>
      </a>
    </div>
  )
}
const Works = props => {
  const W = props.works
  const wList = W.map((work, i) => {
    return (
      <WorkItem
        key={work.id}
        image={work.image}
        img_m={work.img_m}
        img_s={work.img_s}
        title={work.title}
        link={work.link}
      />
    )
  })
  return (
    <section className="works" id="video360">
      <h2>our works</h2>
      {wList}
    </section>
  )
}
export default Works
