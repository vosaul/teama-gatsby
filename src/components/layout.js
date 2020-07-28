/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Services from "./services"
import Works from "./works"
import { useSiteMetadata } from "./use_static_query"
import "./layout.css"

const Layout = ({ children }) => {
  const { social } = useSiteMetadata()
  const { services } = useSiteMetadata()
  const { works } = useSiteMetadata()
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <Navbar siteSocial={social} />
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
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
