import PageContainer  from '../components/PageContainer'
import Navbar         from '../components/Navbar'
import ContentWrapper from '../components/ContentWrapper'
import PageHeading    from '../components/PageHeading'
import ContentLeft    from '../components/ContentLeft'
import ContentRight   from '../components/ContentRight'
import Divider        from '../components/Divider'
import RightPanelHeading from '../components/RightPanelHeading'
import LogoWrapper    from '../components/LogoWrapper'
import LogosPanel from '../components/LogosPanel'
import Footer         from '../components/Footer'

// import Samsung from '../../assets/img/classic-samsung-logo-png-0.png'
// import LG from '../../assets/img/lg.jpeg'
// import HiSense from '../../assets/img/hisense-logo-1.png'
// import Sony from '../../assets/img/company-sony-png-logo-0.png'
// import Defy from '../../assets/img/defy-logo-A8D410F8EF-seeklogo.com.png'
// import Bosch from '../../assets/img/bosch-logo-B2E7D7D6AA-seeklogo.com.png'
// import Smeg from '../../assets/img/smeg-logo-665201D1A4-seeklogo.com.png'
// import KitchenAid from '../../assets/img/kitchenaid-logo-1EDE233974-seeklogo.com.png'
import '../styles/styles.scss';

const Home = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContentWrapper>
        <ContentLeft>
          <PageHeading>
            <h3>Our Motto</h3>
          </PageHeading>
          <p>
            Our mission at Refabulous is to provide a trustworthy and quality service to all of our clients. We aim to build healthy working relations with insurance providers, across our country. This would allow our company to become a trusted household service provider.
          </p>
          <h4>Need more content here...</h4>
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
  )
}

export default Home