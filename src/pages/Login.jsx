import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/style.scss'

const Login = () => {
  return (
    <>
      <Header />
      <div className="loginReg">
        <div className="img"></div>
        <div className="form">
          <form className="formComponent">
            <h3>Login</h3>
            <div>
              <label className="inputLabel">Email</label>
              <input className="formInput" type="text" name="email" placeholder="Email"/>
            </div>
            <div>
              <label className="inputLabel">Password</label>
              <input className="formInput" type="password" name="password" placeholder="Password"/>
            </div>
            <Link to="/signup">
              <p className="account">Don't have an account?</p>
            </Link>
            <Link to="/signup">
              <button type="submit" className="formButton">Login</button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login