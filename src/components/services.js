import React from "react"

const ServiceItem = props => {
  return (
    <li>
      <img className="about_icon" src={props.icon} alt="about icon" />
      <p>{props.info}</p>
    </li>
  )
}
const Services = props => {
  const Serv = props.ourServices
  const servList = Serv.map((serv, i) => {
    return (
    <ServiceItem key={i} icon={serv.icon} info={serv.info} />
    )
  })
  return <ul>{servList}</ul>
}
export default Services
