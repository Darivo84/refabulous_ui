import PageContainer    from '../components/PageContainer'
import Nav              from '../components/Nav'
import ContentWrapper   from '../components/ContentWrapper'
import PageHeading      from '../components/PageHeading'
import ContentLeft      from '../components/ContentLeft'
import ContentRight     from '../components/ContentRight'
import Divider          from '../components/Divider'
import RightPanelHeading from '../components/RightPanelHeading'
import LogoWrapper      from '../components/LogoWrapper'
import LogosPanel        from '../components/LogosPanel'
import Footer           from '../components/Footer'
import '../styles/styles.scss'

import Laundry from '../assets/siteImgs/laundry.jpg'

const About = () => {
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

export default About