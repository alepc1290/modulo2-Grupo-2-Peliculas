import { Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./modal.css";

function NuevaPeliculaModal({ show, onClose, onSave, pelicula }) {
  const [form, setForm] = useState({
    codigo: "",
    nombre: "",
    descripcion: "",
    categoria: "",
    publicado: false,
  });

  useEffect(() => {
    if (pelicula) {
      setForm(pelicula);
    }
  }, [pelicula]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleGuardar = () => {
    onSave(form);
    onClose();

    setForm({
      codigo: "",
      nombre: "",
      descripcion: "",
      categoria: "",
      publicado: false,
    });
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      dialogClassName="nebula-modal"
    >
      <Modal.Header closeButton className="nebula-modal-header">
        <Modal.Title>Nueva Película</Modal.Title>
      </Modal.Header>

      <Modal.Body className="nebula-modal-body">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Código</Form.Label>
            <Form.Control
              type="text"
              name="codigo"
              value={form.codigo}
              onChange={handleChange}
              disabled={!!pelicula}   
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descripcion"
              value={form.descripcion}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
            >
              <option value="">Seleccionar</option>
              <option>Acción</option>
              <option>Drama</option>
              <option>Comedia</option>
            </Form.Select>
          </Form.Group>

          <Form.Check
            type="checkbox"
            label="Publicado"
            name="publicado"
            checked={form.publicado}
            onChange={handleChange}
            className="mt-2"
          />
        </Form>
      </Modal.Body>

      <Modal.Footer className="nebula-modal-footer">
        <button className="search-btn" onClick={handleGuardar}>
          Guardar
        </button>

        <button className="search-btn" onClick={onClose}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default NuevaPeliculaModal;
