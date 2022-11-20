import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/style.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="headerWrapper">
      <Link to='/home' style={{ textDecoration: 'none', color: "rgb(220, 187, 0)" }}>
        <h3>Logo</h3>
      </Link>
      </div>
    </div>    
  )
}

export default Header