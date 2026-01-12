import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"; //
import Home from "./pages/Home/home";
import Aboutus from "./pages/Aboutus/aboutus";
import Movies from "./pages/Movies/movies";
import Error404 from "./pages/PaginaError404/Error404";
import Admin from "./pages/Administrador/admin";
import Register from './pages/Register/register';
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/footer";
import NavBar from "./components/NavBar/navBar";
import AuthChecker from "./pages/PaginaError404/authChecker";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/home" element={<Home searchTerm={searchTerm} />} />
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