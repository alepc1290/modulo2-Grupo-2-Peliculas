import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/home";
import Aboutus from "./pages/Aboutus/aboutus";
import Movies from "./pages/Movies/movies";
import Error404 from "./pages/PaginaError404/Error404";
import Admin from "./pages/Administrador/admin";
import Register from './pages/Register/register';
import Login from "./pages/Login/Login"; 
import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/navBar"; 

import AuthChecker from "./pages/PaginaError404/authChecker"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/admin" 
            element={
              <AuthChecker>
                <Admin />
              </AuthChecker>
            } 
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;