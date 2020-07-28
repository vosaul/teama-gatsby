import React from "react"

const WorkItem = props => {
  return (
    <div className="video_item container">
      <h3>{props.title}</h3>
      <a className="video360" href={props.w_link}>
              <img srcset={props.image} alt="work" />
      </a>
    </div>
  )
}
const Works = (props) => {
  const W = props.works
  const wList = W.map((work, i) => {
    return (
      <WorkItem
            key={i}
            image={work.image}
            img_m={work.img_m}
            img_s={work.img_s}
            title={work.title}
            w_link={work.w_link} />)
  })
  const a=props.ourServices
  console.log(a)
  return (
  <section class="works" id="video360">
            <h2>our works</h2>
            {wList}
          </section>)
}
export default Works