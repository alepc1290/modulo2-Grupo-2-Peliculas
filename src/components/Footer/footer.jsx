import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col md={4}>
            <img src="./Nebula-LOGO.png"
              width="30%"
              alt="" />
          </Col>

          <Col md={4} className="text-center">
            <div className="socials">
              <a href="/error404" target="_blank" rel="noreferrer">
                f
              </a>
              <a href="/error404" target="_blank" rel="noreferrer">
                ◎
              </a>
              <a href="/error404" target="_blank" rel="noreferrer">
                X
              </a>
            </div>


            <div className="copyright">
              © 2026 Nebula
            </div>
          </Col>

          <Col md={4} className="text-end footer-links">
            <a href="https://policies.google.com/privacy?hl=es">Políticas de privacidad</a>
            <a href="/aboutus">Nosotros</a>
            <a href="/">Inicio</a>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}