import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import SingleArticlePage from './pages/SingleArticlePage';
import './App.scss';

import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={ <HomePage /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/articles" element={ <Articles /> } />
        <Route path="/single-article" element={ <SingleArticlePage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;