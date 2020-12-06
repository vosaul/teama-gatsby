import React from "react"

const PostLink = ({ post }) => (
  <div className="team_item">
    <div className="author_img_box">
      <img
        src={post.frontmatter.image}
        alt="{post.frontmatter.title}"
        className="author_image"
      />
    </div>
    <div className="text_box">
      <h3>
        {post.frontmatter.title}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  </div>
)

export default PostLink
