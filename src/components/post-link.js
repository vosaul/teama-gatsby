import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div className="team_item">
    <div class="author_img_box">
      <img src={post.frontmatter.image} alt="{post.frontmatter.title}" />
    </div>
    <div class="text_box">
      <h3>
        <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
      </h3>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
    </div>
  </div>
)

export default PostLink
