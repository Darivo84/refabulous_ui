import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSignedOut from '../components/HeaderSignedOut';
import Footer from '../components/Footer';
import '../styles/style.scss'

const Home = () => {
  return (
    <>
      <HeaderSignedOut />
      <div className="home">
        <div className="homeWrapper">
          <div className="homeTitleWrapper">
            <h1 className="homeTitle">Lorem ipsum dolor sit amet</h1>
            <p className="homeCaption">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br/>
              Aenean commodo ligula eget dolor. Aenean massa. <br/>
              Cum sociis natoque penatibus et
            </p>
         
            <div className="homeBtnPanel">
              <Link to='/'>
                <button className="button">Get a quote</button>
              </Link>
              <Link to='/articles'>
                <button className="button">Our Services</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home