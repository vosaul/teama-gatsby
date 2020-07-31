const React = require("react")
//const ReactMarkdown = require("react-markdown")
//const input = require("./_team/roman.md")

const content = "<ReactMarkdown source={input} />"
const Teama = () => {
  return (
    <section>
      <h2>our team</h2>
      <p>{content}</p>
    </section>
  ) 
}

export default Teama