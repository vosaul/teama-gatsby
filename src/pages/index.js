import React from "react"
import { Link } from "gatsby"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const Psts = ({ edges }) => {
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <section className="container-fluid">
      <div className="team_grid container">
        <h2>our team</h2>
        {Posts}
      </div>
    </section>
  )
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Teama" />
    <div id="navbar" />
    <div id="container" />
    <Psts edges={edges} />
    <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
    <p>
      <Link to="/list/">Go posts list</Link>
    </p>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            image
            slug
            title
          }
        }
      }
    }
  }
`
