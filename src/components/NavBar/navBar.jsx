import { Container, Navbar, Nav, Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { getLSItems } from "../../utils/function";
import "./navBar.css";

function NavBar({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = getLSItems("user_session");
  const mostrarBuscador = location.pathname === "/" || location.pathname === "/home";

  const handleLogoClick = (e) => {
    e.preventDefault(); // Evitamos la navegación normal de React
    sessionStorage.removeItem("intro_nebula_seen"); // Borramos la memoria de que "ya lo vio"
    window.location.href = "/home"; // Forzamos una recarga real de la página
  };

  const handleLogout = () => {
    localStorage.removeItem("user_session");
    localStorage.removeItem("isAdmin");
    navigate("/home");
  };

  return (
    <Navbar expand="lg" className="navbar-nebula" fixed="top">
      <Container fluid className="navbar-container">

        <Navbar.Brand href="/home" className="navbar-logo" onClick={handleLogoClick}>
          <img src="/Nebula-LOGO.png" alt="Nebula" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nebula-nav" className="bg-light" />

        <Navbar.Collapse id="navbar-nebula-nav">

          {mostrarBuscador && (
            <Form className="navbar-search mx-auto">
              <InputGroup>
                <InputGroup.Text className="search-icon">
                  <FaSearch />
                </InputGroup.Text>

                <Form.Control
                  type="text"
                  placeholder="Buscar película..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </InputGroup>
            </Form>
          )}

          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/home" className="nav-link-custom">Inicio</Nav.Link>

            {user?.rol === "admin" && (
              <Nav.Link href="/admin" className="text-warning fw-bold">ADMIN</Nav.Link>
            )}

            <span className="separator d-none d-lg-inline mx-2">|</span>

            {user ? (
              <Button
                variant="link"
                onClick={handleLogout}
                className="nav-link-custom text-danger d-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <FaSignOutAlt className="me-1" /> Salir
              </Button>
            ) : (
              <Nav.Link href="/register" className="user-icon d-flex align-items-center">
                <FaUser size={20} />
              </Nav.Link>
            )}

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;