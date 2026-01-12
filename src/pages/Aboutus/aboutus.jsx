import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './aboutus.css';

const Aboutus = () => {
  const equipo = [
    { nombre: "Alejandro", img: "./src/assets/img/202f2e9e-fad0-4d51-8a0f-dc93f8d214c7.jpg" },
    { nombre: "nico", img: "./src/assets/img/cianca.jpg" },
    { nombre: "Jhonny", img: "./src/assets/img/jhonny.jpg" },
    { nombre: "stephania", img: "URL_FOTO_COMPAÑERO" },
  ];

  return (
    <div className="about-container">

      <div className="about-hero">
        <h1>SOBRE <span className="text-purple">NEBULA</span></h1>
        <p>Tu destino final para el mejor entretenimiento.</p>
      </div>

      <Container className="py-5">


        <h2 className="text-center mb-4">INTEGRANTES</h2>
        <Row className="justify-content-center">
          {equipo.map((member, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <div className="team-card-wrapper">
                <Card className="team-card h-100">
                  <Card.Img variant="top" src={member.img} />
                  <Card.Body className="text-center">
                    <Card.Title className="text-light">{member.nombre}</Card.Title>
                    <Card.Text className="text-purple">{member.rol}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Aboutus;