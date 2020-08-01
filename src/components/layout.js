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
import { useSiteMetadata } from "./use_static_query"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./main.css"
import "../../static/Ionicons/css/ionicons.min.css"

const Layout = ({ children }) => {
  const { social } = useSiteMetadata()
  const { services } = useSiteMetadata()
  const { works } = useSiteMetadata()
  return (
    <main
      className="page-content"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <header className="main_header transparent">
        <Link to="/" className="logo">
          <h1>TEAMA</h1>
          <p>VISUAL EFFECTS STUDIO</p>
        </Link>
        <Navbar siteSocial={social} />
      </header>

      <Services ourServices={services} />
      <Works works={works} />

      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </main>
  )
}

/* Layout.propTypes = {
  children: PropTypes.node.isRequired,
} */
export default Layout
