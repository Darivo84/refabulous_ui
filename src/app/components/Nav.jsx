import { Component } from "react"
import { Link }      from "react-router-dom"
import Logo          from "../assets/logo/Logo.png"
import "../styles/styles.scss"

class Nav extends Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return(
      <>
        <nav className="nav">
          <Link to="/">
            <img className="logoImg" src={ Logo } alt="Logo" />
          </Link>
          <div>
            <ul id="navbar" className={ this.state.clicked ? '#navbar active' : '#navbar' }>
              <li><Link className="link" to="/about-us">About Us</Link></li>
              <li><Link className="link" to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div id="mobile" onClick={ this.handleClick }>
            <i id="bars" className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
          </div>
        </nav>
      </>
    )
  }
}

export default Nav