import PageContainer     from '../components/PageContainer'
import Nav               from '../components/Nav'
import ContentWrapper    from '../components/ContentWrapper'
import PageHeading       from '../components/PageHeading'
import ContentLeft       from '../components/ContentLeft'
import ContentRight      from '../components/ContentRight'
import Divider           from '../components/Divider'
import RightPanelHeading from '../components/RightPanelHeading'
import LogoWrapper       from '../components/LogoWrapper'
import Footer            from '../components/Footer'
import TV                from '../assets/siteImgs/sammysung.png'
import '../styles/styles.scss'

const HomePage = () => {
  return (
    <>
      <Nav />
      <PageContainer>
        {/* <Navbar /> */}
          <ContentWrapper>
            <ContentLeft>
              <p>Refabulous (Pty) Ltd has been steadily growing for the past few years. We have seen it flourish since our director, Liam Vollenhoven, first began to learn the trade, in 2016. We are a company that strives to create a professional working relationship with our client base, offering excellent service with a dedicated approach. Our company consists of two different sectors, we deal with home appliance repairs and damage assessment reports, as well as our salvage management service for insurance companies , more specifically home contents.</p>
              <PageHeading>
                <h3>Our Motto</h3>
              </PageHeading>
              <p>
                Our mission at Refabulous is to provide a trustworthy and quality service to all of our clients. We aim to build healthy working relations with insurance providers, across our country. This would allow our company to become a trusted household service provider.
              </p>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img className="aboutImg" src={ TV } alt="TV" />
              </div>
            </ContentLeft>
            <ContentRight>
              <Divider />
              <RightPanelHeading>
                <h3>Our Misson</h3>
              </RightPanelHeading>
              <Divider />
              <LogoWrapper>
                <p>
                  Our mission is to provide our customers with the highest level of customer service and satisfaction. We strive to maintain our reputation as the leading provider of TV repair and insurance salvage management services in Kuils River.  
                </p>
                <ul>
                  <li>Quality: We are committed to providing our customers with high-quality services and products.</li>
                  <li>Integrity: We believe in conducting our business with honesty and transparency, and we hold ourselves to the highest ethical standards.</li>
                  <li>Customer Service: Our customer's satisfaction is our top priority, and we go above and beyond to ensure that they are happy with the services we provide.</li>
                  <li>TV Repair: Our team of experienced technicians offers professional TV repair services for all types of television models. We have the skills and experience necessary to diagnose and fix a wide range of problems, including TV that have no display, no power, audio issues, and more.</li>
                  <li>Insurance Salvage Management: In addition to TV repair services, we also specialize in the management of insurance salvage. Our team has extensive experience in the insurance industry, and we are equipped to handle all aspects of the insurance salvage process, from initial assessment to final disposal.</li>
                </ul>
                <div className="btnWrapper">
                  <button>Request a Quote</button>
                </div>
              </LogoWrapper>
            </ContentRight>
          </ContentWrapper>
        <Footer />
      </PageContainer>
    </>
  )
}

export default HomePage