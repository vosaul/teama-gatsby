/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"
import Services from "./services"
import Works from "./works"
import Video from "./video"
import { useSiteMetadata } from "./use_static_query"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./main.css"
import "../../static/Ionicons/css/ionicons.min.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { social } = useSiteMetadata()
  const { services } = useSiteMetadata()
  const { works } = useSiteMetadata()
  const { title } = useSiteMetadata()
  const { email } = useSiteMetadata()
  const { description } = useSiteMetadata()
  return (
    /*       style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }} */
    <main className="page-content">
      <header className="main_header transparent">
        <Link to="/" className="logo">
          <h1>TEAMA</h1>
          <p>VISUAL EFFECTS STUDIO</p>
        </Link>
        <Navbar siteSocial={social} />
      </header>
      <Video />
      <Services ourServices={services} />
      <Works works={works} />
      <main>{children}</main>
      <Footer
        title={title}
        email={email}
        social={social}
        description={description}
      />
    </main>
  )
}

/* Layout.propTypes = {
  children: PropTypes.node.isRequired,
} */
export default Layout
