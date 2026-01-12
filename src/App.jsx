import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
import Aboutus from "./pages/Aboutus/aboutus";
import Movies from "./pages/Movies/movies";
import Error404 from "./pages/PaginaError404/Error404";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/footer";
import Admin from "./pages/Administrador/admin";
import Register from './pages/Register/register'


function App() {
  return (
     <BrowserRouter>
      <NavBar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
