import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/style.scss'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <h2 className="homeTitle">Lorem ipsum dolor sit amet</h2>
      </div>
      <Footer />
    </>
  )
}

export default Home