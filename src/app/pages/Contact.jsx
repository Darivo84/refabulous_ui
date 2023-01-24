import PageContainer  from '../components/PageContainer'
import Navbar         from '../components/Navbar'
import ContentWrapper from '../components/ContentWrapper'
import ContentLeft    from '../components/ContentLeft'
import ContentRight   from '../components/ContentRight'
import Divider        from '../components/Divider'
import PageHeading    from '../components/PageHeading'
import RightPanelHeading from '../components/RightPanelHeading'
import LogoWrapper      from '../components/LogoWrapper'
import Footer         from '../components/Footer'
import '../styles/styles.scss'
import FormComponent from '../components/FormComponent'

const Contact = () => {
  return (
    <PageContainer>
      <Navbar />
        <ContentWrapper>
          <ContentLeft>
            <PageHeading>
              <h3>Contact Us</h3>
            </PageHeading>
            <form style={{ padding: '30px' }}>
              <FormComponent />
            </form>
          </ContentLeft>
          <ContentRight>
            <Divider />
              <RightPanelHeading>
                <h3>Where we're based</h3>
              </RightPanelHeading>
            <Divider />
            <LogoWrapper>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontWeight: "bold" }}>Address:</span> Kuils River, Cape Town 
                <br />
                <span style={{ fontWeight: "bold" }}>Telephone:</span> 0672008426 
                <br />
                <span style={{ fontWeight: "bold" }}>Email:</span> Refabulousltd@gmail.com
              </p>
              <p>Map image goes here...</p>
            </LogoWrapper>
          </ContentRight>
        </ContentWrapper>
      <Footer />
    </PageContainer>
  )
}

export default Contact