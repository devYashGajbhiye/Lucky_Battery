import { Route, Routes } from 'react-router-dom'
import './App.css'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Products from './pages/Products'
function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
