
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/home'
import Aboutus from './pages/Aboutus/aboutus'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
