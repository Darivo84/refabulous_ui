import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home    from './app/pages/Home'
import About   from './app/pages/About'
import Contact from './app/pages/Contact'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about-us" element={ <About /> } />
        <Route path="/contact-us" element={ <Contact /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;