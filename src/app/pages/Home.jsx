import PageContainer     from '../components/PageContainer'
import Nav               from '../components/Nav'
import ContentWrapper    from '../components/ContentWrapper'
import PageHeading       from '../components/PageHeading'
import ContentLeft       from '../components/ContentLeft'
import ContentRight      from '../components/ContentRight'
import Divider           from '../components/Divider'
import RightPanelHeading from '../components/RightPanelHeading'
import LogoWrapper       from '../components/LogoWrapper'
import LogosPanel        from '../components/LogosPanel'
import Footer            from '../components/Footer'

// import Samsung from '../../assets/img/classic-samsung-logo-png-0.png'
// import LG from '../../assets/img/lg.jpeg'
// import HiSense from '../../assets/img/hisense-logo-1.png'
// import Sony from '../../assets/img/company-sony-png-logo-0.png'
// import Defy from '../../assets/img/defy-logo-A8D410F8EF-seeklogo.com.png'
// import Bosch from '../../assets/img/bosch-logo-B2E7D7D6AA-seeklogo.com.png'
// import Smeg from '../../assets/img/smeg-logo-665201D1A4-seeklogo.com.png'
// import KitchenAid from '../../assets/img/kitchenaid-logo-1EDE233974-seeklogo.com.png'
import '../styles/styles.scss';

import Laundry from '../assets/siteImgs/laundry.jpg'
const Home = () => {
  return (
    <>
      <Nav />
        <PageContainer>
          {/* <Navbar /> */}
          <ContentWrapper>
            <ContentLeft>
              <PageHeading>
                <h3>Welcome To Refabulous!</h3>
              </PageHeading>
              <h4>Refabulous TV Repair & Insurance Salvage Management</h4>
              <p>
                We at Refabulous specialize in the repair of televisions and the management of insurance salvages. Our goal is to provide high-quality services to our customers and to ensure that their televisions are functioning properly. Our team of experienced technicians is equipped with the latest tools and technologies to repair all types of television models. We take pride in our ability to diagnose and fix problems quickly and efficiently, keeping downtime to a minimum.
              </p>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img className="homeImg" src={ Laundry } alt="Laundry" />
              </div>
            </ContentLeft>
            <ContentRight>
              <Divider />
                <RightPanelHeading>
                  <h3>We Specialise in...</h3>
                </RightPanelHeading>
              <Divider />
              <LogoWrapper>
                <LogosPanel />
              </LogoWrapper>
            </ContentRight>
          </ContentWrapper>
          <Footer />
        </PageContainer>
    </>
  )
}

export default Home