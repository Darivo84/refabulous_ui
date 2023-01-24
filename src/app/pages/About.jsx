import PageContainer    from '../components/PageContainer'
import Navbar           from '../components/Navbar'
import ContentWrapper   from '../components/ContentWrapper'
import PageHeading      from '../components/PageHeading'
import ContentLeft      from '../components/ContentLeft'
import ContentRight     from '../components/ContentRight'
import Divider          from '../components/Divider'
import RightPanelHeading from '../components/RightPanelHeading'
import LogoWrapper      from '../components/LogoWrapper'
import Footer           from '../components/Footer'
import '../styles/styles.scss'

const About = () => {
  return (
    <PageContainer>
      <Navbar />
        <ContentWrapper>
          <ContentLeft>
            <PageHeading>
              <h3>About Us</h3>
            </PageHeading>
            <p>Refabulous (Pty) Ltd has been steadily growing for the past few years. We have seen it flourish since our director, Liam Vollenhoven, first began to learn the trade, in 2016. We are a company that strives to create a professional working relationship with our client base, offering excellent service with a dedicated approach. Our company consists of two different sectors, we deal with home appliance repairs and damage assessment reports, as well as our salvage management service for insurance companies , more specifically home contents.</p>
            <h4>Need more content here...</h4>
          </ContentLeft>
          <ContentRight>
            <Divider />
            <RightPanelHeading>
              <h3>Our Misson</h3>
            </RightPanelHeading>
            <Divider />
            <LogoWrapper>
              <p>Our mission at Refabulous is to provide a trustworthy and quality service to all of our clients. We aim to build healthy working relations with insurance providers, across our country. This would allow our company to become a trusted household service provider.</p>
              <h4>Need more content here...</h4>
            </LogoWrapper>
          </ContentRight>
        </ContentWrapper>
      <Footer />
    </PageContainer>
  )
}

export default About