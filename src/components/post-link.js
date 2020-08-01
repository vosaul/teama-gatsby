import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <h2>
      <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
    </h2>
    <img src={post.frontmatter.image} alt="{post.frontmatter.title}" />
    <article>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  </div>
)

export default PostLink
