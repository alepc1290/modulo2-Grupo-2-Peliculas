import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FaSearch, FaUser } from "react-icons/fa";
import { useState } from "react";
import "./navBar.css";
import { getLSItems } from "../../utils/function";

function NavBar() {
  const [search, setSearch] = useState("");
  const user = getLSItems("user_session");

  return (

    <Navbar expand="lg" className="navbar-nebula" fixed="top">
      <Container fluid className="navbar-container">

        <Navbar.Brand className="navbar-logo">
          <img
            src="/Nebula-LOGO.png"
            alt="Nebula"
            height="50"
          />
        </Navbar.Brand>

        <Form className="navbar-search">
          <InputGroup>
            <InputGroup.Text className="search-icon">
              <FaSearch />
            </InputGroup.Text>

            <Form.Control
              type="text"
              placeholder="Buscar película..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />

            {search.length > 0 && (
              <Button className="search-btn btn-animated-border">
                Buscar
              </Button>
            )}
          </InputGroup>
        </Form>

        <Nav className="navbar-right">
          <Nav.Link href="/home">Inicio</Nav.Link>
          {user?.rol === "admin" && (
            <Nav.Link href="/admin" className="text-warning">Panel Admin</Nav.Link>
          )}

          <span className="separator">|</span>
          <Nav.Link
            href="/home"
            className="nav-link-custom">
            Inicio
          </Nav.Link>

          <span className="separator">|</span>

          <Nav.Link
            href="/register"
            className="user-icon d-flex align-items-center"
          >
            <FaUser size={20} />
          </Nav.Link>

        </Nav>

      </Container>
    </Navbar>
  );
}

export default NavBar;
