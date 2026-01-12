import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
import Aboutus from "./pages/Aboutus/aboutus";
import Movies from "./pages/Movies/movies";
import Error404 from "./pages/PaginaError404/Error404";
import Admin from "./pages/Administrador/admin";
import Register from "./pages/Register/register";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
