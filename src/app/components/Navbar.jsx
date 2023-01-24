import { Link } from 'react-router-dom'
import '../styles/styles.scss'

const Navbar = () => {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".navMenu")

  const handleOnChange = () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  }

  // document.querySelector(".navLink").forEach(n => n.addEventListener("click", () => {
  //   hamburger.classList.remove("active")
  //   navMenu.classList.remove("active")
  // }))

  return (
    <>
      <header>
        <nav className="navbar">
          <Link className="navbarBrand" to="/"><h3>R/F</h3></Link>

          <ul className="navMenu">
            <li className="navItem">
              <Link to="/about-us" className="navLink">About Us</Link>
            </li>
            <li className="navItem">
              <Link to="/contact-us" className="navLink">Contact Us</Link>
            </li>
          </ul>

          <div 
            className="hamburger" 
            onChange={ handleOnChange }
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar