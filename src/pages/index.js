import React from "react"
import { Link } from "gatsby"
//import PostLink from "../components/post-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"


/* const List = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return <div>{Posts}</div>
} */
 

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  
  
  <Layout>
    <SEO title="Teama" />
    <div id="navbar" />
    <p>Now go build something great.</p>
    <div id="container" />
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