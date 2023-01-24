import { Link } from 'react-router-dom'
import '../styles/styles.scss'

const Footer = () => {
  const currentTime = new Date()
  const currentYear = currentTime.getFullYear()

  return (
    <div className="footerComponent">
      <div className="footerContainer">
        <Link to="/" className="copyLink">
          <h4>Copyright &copy; { currentYear } | Refabulous (Pty) Ltd</h4>
        </Link>
      </div>
    </div>
  )
}

export default Footer