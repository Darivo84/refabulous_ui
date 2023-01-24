import Footer from '../app/components/Footer'
import Navbar from '../app/components/Navbar'
import './style.scss'

const Test = () => {

  return (
    <div className="pageContainer">
      <Navbar />
      
      <div className="contentWrapper">
        <div className="contentLeft">
          <div className="pageHeading">
            <h3>Our Motto</h3>
          </div>
          <p>
            Our mission at Refabulous is to provide a trustworthy and quality service to all of our clients. We aim to build healthy working relations with insurance providers, across our country. This would allow our company to become a trusted household service provider.
          </p>
          <h4>Need more content here...</h4>
        </div>
        <div className="contentRight">
          <div className="divider"></div>
          <div className="specialityLogos">
            LOGOS here
          </div>
          <div className="divider"></div>
        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default Test