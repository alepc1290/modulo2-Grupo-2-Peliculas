import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FaSearch, FaUser } from "react-icons/fa";
import { useState } from "react";
import "./navBar.css";

function NavBar() {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Navbar expand="lg" className="navbar-nebula" fixed="top">
      <Container fluid className="navbar-container">
        <Navbar.Brand className="navbar-logo">
          <img src="/Nebula-LOGO.png" alt="Nebula" height="50" />
        </Navbar.Brand>

        
        <span
          className="search-toggle"
          style={{ cursor: "pointer" }}
          onClick={() => setShowSearch(!showSearch)}
        >
          <FaSearch />
        </span>

        
        {showSearch && (
          <Form className="navbar-search">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Buscar película..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
                autoFocus
              />

              {search.length > 0 && (
                <Button className="search-btn btn-animated-border">
                  Buscar
                </Button>
              )}
            </InputGroup>
          </Form>
        )}

        <Nav className="navbar-right">
          <Nav.Link href="/home" className="nav-link-custom">
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
