import React from 'react'
import Navbar from './navbar'

const Footer = props => {
return (
  <footer className="site_footer container-fluid">
    <div className="wrapper">
      <div className="footer_grid">
        <div className="footer_col col1">
          <p>
            <a className="u-email" href="mailto:" {...props.email}>
              <span>&#x2709a;</span> {props.email}
            </a>
          </p>
          <p>Created by Gatsby</p>
          <p>
            Developer:{" "}
            <a
              href="https://www.upwork.com/fl/volodimirsaulyak"
              target="_blank"
              rel="noopener noreferrer"
            >
              vosaul
            </a>
          </p>
          <p>
            <span>&#169;</span> TEAMA, 2020
          </p>
        </div>

        <div className="footer_col col2">
          <h3>Join Us at</h3>
          <Navbar siteSocial={props.social} />
        </div>

        <div className="footer_col col3">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  </footer>
)}

export default Footer