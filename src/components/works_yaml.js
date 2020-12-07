import React from "react"
import ourWorks from '../data/works.yml'
 
const Tags = props => {
const T = props.tags
const TagsL = T.map((tag,i) => {
  return (
    <span 
    style={{margin: `2px 5px 15px`, fontSize: `14px`, fontWeight:`100`}}>🏷{tag} </span>
  )
})
return TagsL
}

const WorkItem = props => {
  return (
    <div className="video_item container">
      <h3>{props.title}</h3>
      <p>
      <Tags tags={props.tags} />
      </p>
      <a className="video360" href={props.w_link}>
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
const WorksY = () => {
  const wList = ourWorks.map((work, i) => {
    return (
      <WorkItem
        key={work.id}
        image={work.image}
        img_m={work.img_m}
        img_s={work.img_s}
        title={work.title}
        w_link={work.w_link}
        tags={work.tags}
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
export default WorksY
