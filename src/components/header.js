import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ReactDOM from "react-dom"

function SocialLinks(value) {
  console.log(value.title)
  return (<a href={value.link}>{value.title}</a>)
}
function Sl(props) {
        
        var i = 0
        var navigation
        while (props[i]) {
          navigation += <a href= "{props[i].link}">{props[i].title}</a>
          i++
        }
        console.log(navigation)
        return navigation;
}

const Header = ({ siteMeta }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <h1 style={{ margin: 0 }}>{siteMeta.title}</h1>
        <p>{siteMeta.subtitle}</p>
        <p>{siteMeta.description}</p>
      </Link>
      <p className="social">
        {siteMeta.social.forEach(
          SocialLinks

          /*             var el=SocialLinks
            ReactDOM.render(
              el,
              document.getElementById("root")
            ) */
        )}
      </p>
      <nav className="sl"> {Sl(siteMeta.social)}</nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
