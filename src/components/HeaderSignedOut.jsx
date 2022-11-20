import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/style.scss'

const HeaderSignedOut = () => {
  return (
    <div className="header">
      <div className="headerWrapper">
        <Link to='/home' style={{ textDecoration: 'none', color: "rgb(220, 187, 0)" }}> 
          <h3>Logo</h3>
        </Link>
        <div className="headerButtonWrapper">
          <Link to='/about'>
            <button>About</button>
          </Link>
          <Link to='/login'>
            <button>Login</button>
          </Link>
          <Link to='/signup'>
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </div>    
  )
}

export default HeaderSignedOut