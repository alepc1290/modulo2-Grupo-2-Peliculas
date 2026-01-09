import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/home'
import Aboutus from './pages/Aboutus/aboutus'
import { Navbar } from 'react-bootstrap'
import Footer from './components/Footer/footer'
import Error404 from './pages/PaginaError404/Error404'

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path='/PaginaError404' element={<Error404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>


  )


}

export default App
