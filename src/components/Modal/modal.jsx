import { Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./modal.css";

function NuevaPeliculaModal({ show, onClose, onSave, pelicula }) {
  const [form, setForm] = useState({
    codigo: "",
    nombre: "",
    imagen: "", // <--- AGREGAMOS ESTA PROPIEDAD
    descripcion: "",
    categoria: "",
    publicado: false,
  });

  useEffect(() => {
    if (show) {
      if (pelicula) {
        setForm(pelicula);
      } else {
        setForm({
          codigo: "",
          nombre: "",
          imagen: "", // <--- RESETEAMOS TAMBIÉN AQUÍ
          descripcion: "",
          categoria: "",
          publicado: false,
        });
      }
    }
  }, [pelicula, show]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleGuardar = () => {
    if (!form.nombre.trim() || !form.imagen.trim()) {
      alert("El nombre y la imagen son obligatorios");
      return;
    }
    onSave(form);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static" dialogClassName="nebula-modal">
      <Modal.Header closeButton className="nebula-modal-header">
        <Modal.Title>{pelicula ? "Editar Película" : "Nueva Película"}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="nebula-modal-body">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Código</Form.Label>
            <Form.Control type="text" name="codigo" value={form.codigo} onChange={handleChange} disabled={!!pelicula} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="nombre" value={form.nombre} onChange={handleChange} />
          </Form.Group>

          {/* --- NUEVO CAMPO DE IMAGEN --- */}
          <Form.Group className="mb-3">
            <Form.Label>Link de Portada (URL)</Form.Label>
            <Form.Control 
              type="text" 
              name="imagen" 
              placeholder="https://ejemplo.com/imagen.jpg"
              value={form.imagen} 
              onChange={handleChange} 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} name="descripcion" value={form.descripcion} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select name="categoria" value={form.categoria} onChange={handleChange}>
              <option value="">Seleccionar</option>
              <option>Terror</option>
              <option>Comedia</option>
              <option>Animados</option>
            </Form.Select>
          </Form.Group>

          <Form.Check type="checkbox" label="Publicado" name="publicado" checked={form.publicado} onChange={handleChange} />
        </Form>
      </Modal.Body>

      <Modal.Footer className="nebula-modal-footer">
        <button className="search-btn" onClick={handleGuardar}>Guardar</button>
        <button className="search-btn" onClick={onClose}>Cerrar</button>
      </Modal.Footer>
    </Modal>
  );
}

export default NuevaPeliculaModal;