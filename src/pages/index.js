import React from "react"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InstaWidget from "../components/insta"

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
    <div id="navbar" key="navbar"/>
    <div id="container" />
    <Psts edges={edges} key={edges.id} />
    <InstaWidget />

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
