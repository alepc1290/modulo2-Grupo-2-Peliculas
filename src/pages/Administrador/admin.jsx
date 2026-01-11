import "./admin.css";
import { FaTrash, FaEdit, FaStar } from "react-icons/fa";
import { useState } from "react";
import NuevaPeliculaModal from "../../components/Modal/modal";

function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaEditando, setPeliculaEditando] = useState(null);

  const handleSave = (pelicula) => {
    if (peliculaEditando) {
      setPeliculas((prev) =>
        prev.map((p) =>
          p.codigo === peliculaEditando.codigo
            ? { ...pelicula, destacada: peliculaEditando.destacada }
            : p
        )
      );
    } else {
      setPeliculas((prev) => [
        ...prev,
        { ...pelicula, destacada: false },
      ]);
    }

    setPeliculaEditando(null);
  };

  const handleEdit = (pelicula) => {
    setPeliculaEditando(pelicula);
    setShowModal(true);
  };

  const handleDelete = (codigo) => {
    setPeliculas((prev) =>
      prev.filter((p) => p.codigo !== codigo)
    );
  };

  const handleDestacar = (codigo) => {
    setPeliculas((prev) =>
      prev.map((p) =>
        p.codigo === codigo
          ? { ...p, destacada: !p.destacada }
          : p
      )
    );
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Panel de Administración</h1>

        <button
          className="btn-add-movie"
          onClick={() => {
            setPeliculaEditando(null);
            setShowModal(true);
          }}
        >
          + Agregar película
        </button>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Publicado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {peliculas.map((peli) => (
            <tr key={peli.codigo}>
              <td>
                {peli.nombre}
                {peli.destacada && " ⭐"}
              </td>
              <td>{peli.categoria}</td>
              <td>{peli.descripcion}</td>
              <td>
                <input
                  type="checkbox"
                  checked={peli.publicado}
                  readOnly
                />
              </td>
              <td className="actions">
                <FaEdit
                  className="icon edit"
                  onClick={() => handleEdit(peli)}
                />
                <FaTrash
                  className="icon delete"
                  onClick={() => handleDelete(peli.codigo)}
                />
                <FaStar
                  className="icon star"
                  onClick={() => handleDestacar(peli.codigo)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <NuevaPeliculaModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        pelicula={peliculaEditando}
      />
    </div>
  );
}

export default Admin;
