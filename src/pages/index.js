import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Teama" />
    <div id="navbar" />
    <p>Now go build something great.</p>
    <div id="container" />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
