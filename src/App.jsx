import { Route, Routes } from 'react-router-dom'
import './App.css'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//pages
import Home from './pages/Home'
function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
