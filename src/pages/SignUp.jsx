import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/style.scss'

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="loginReg">
        <div className="img"></div>
        <div className="form">
          <form className="formComponent">
            <h3>Sign Up</h3>
            <div>
              <label className="inputLabel">Full Name</label>
              <input className="formInput" type="text" name="name" placeholder="Name and Surname"/>
            </div>
            <div>
              <label className="inputLabel">Email</label>
              <input className="formInput" type="text" name="email" placeholder="Email"/>
            </div>
            <div>
              <label className="inputLabel">Password</label>
              <input className="formInput" type="password" name="password" placeholder="Password"/>
            </div>
            <Link to="/login">
              <p className="account">Already have an account?</p>
            </Link>
            <Link to="/login">
              <button type="submit" className="formButton">Sign Up</button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignUp