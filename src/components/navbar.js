import React from "react"

// Our child component that will display our names:

const NavItem = props => {
  return (
    <a href={props.link}>
      <i className={props.icon} />
    </a>
  )
}

const Navbar = props => {
  const Soc = props.siteSocial
  const socialsList = Soc.map((social, i) => {
    return (
        <NavItem
          key={i.toString()}
          link={social.link}
          icon={social.icon}
          title={social.title}
        />
    )
  })
  return <p className="social_links">{socialsList}</p>
}

export default Navbar
