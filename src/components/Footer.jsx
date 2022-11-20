import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerLogo">
          <Link to='/home' style={{ textDecoration: 'none', color: "rgb(220, 187, 0)" }}>
            <h4>Logo</h4>
          </Link>
        </div>
        <div className="footerServices"></div>
      </div>
    </div>
  )
}

export default Footer