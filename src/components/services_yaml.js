import React from "react"
import ymlServ from '../data/home.yml'

const ServiceItem = props => {
  return (
    <li>
      <img className="about_icon" src={props.icon} alt="icon" />
      <p>{props.info}</p>
    </li>
  )
}
const Services = () => {
  const Serv = ymlServ.services
  const servList = Serv.map((serv, i) => {
    return (
    <ServiceItem key={serv.id} icon={serv.icon} info={serv.info} />)
  })
  return (
  <div className="content ">
  <section className="services container-fluid">
    <div className="inner">
      <h2>our services</h2>
      <ul className="about">{servList}</ul>
      </div>
      </section>
      </div>
  )
}
export default Services