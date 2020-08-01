import React from "react"
import Member from "./member"
const Team = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .map(edge => <Member key={edge.node.id} post={edge.node} />)

  return <div>{Posts}</div>
}

export default Team
