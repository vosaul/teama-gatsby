import React from "react"

const ServiceItem = props => {
  return (
    <li>
      <img className="about_icon" src={props.icon} alt="icon" />
      <p>{props.info}</p>
    </li>
  )
}
const Services = props => {
  const Serv = props.ourServices
  const servList = Serv.map((serv, i) => {
    return <ServiceItem key={i} icon={serv.image} info={serv.info} />
  })
  const a = props.ourServices
  console.log(a)
  return <div>{servList}</div>
}
export default Services
