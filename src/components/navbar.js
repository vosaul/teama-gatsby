import React from "react"

// Our child component that will display our names:

const NavItem = (props) => {
  return (
      <a href={props.link}>{props.title}</a>
  )
}

const Navbar = (props) => {
  const Soc = props.siteSocial
  const socialsList = Soc.map((social, i) => {
    return (
      <NavItem
        key={i}
        link={social.link}
        title={social.title}
      />
    )
  })
  return <nav>{socialsList}</nav>
}

export default Navbar
