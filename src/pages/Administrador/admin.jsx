import { useState, useEffect } from "react";
import { getLSItems, setLSItems } from "../../utils/function";
import NuevaPeliculaModal from "../../components/Modal/modal";
import { FaTrash, FaEdit, FaStar } from "react-icons/fa";
import "./admin.css";

const PELIS_INICIALES = [
  { codigo: "1", nombre: "IT", imagen: "https://es.web.img3.acsta.net/pictures/17/04/07/12/58/197841.jpg", categoria: "Terror", publicado: true, descripcion: "Terror total." },
  { codigo: "2", nombre: "SING", imagen: "https://akamai.sscdn.co/uploadfile/letras/playlists/5/c/9/d/5c9d93e2ee95424fb6d0149bd879dbb9.jpg", categoria: "Animados", publicado: true, descripcion: "Canto animal." }
];

function Admin() {
  const [dbPeliculas, setDbPeliculas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [peliEditando, setPeliEditando] = useState(null);

  useEffect(() => {
    const datos = getLSItems("db_peliculas");
    if (!datos || datos.length === 0) {
      setLSItems("db_peliculas", PELIS_INICIALES);
      setDbPeliculas(PELIS_INICIALES);
    } else {
      setDbPeliculas(datos);
    }
  }, []);

  const handleSave = (nuevaPeli) => {
    let listaActualizada;
    if (peliEditando) {
      listaActualizada = dbPeliculas.map(p => p.codigo === nuevaPeli.codigo ? nuevaPeli : p);
    } else {
      listaActualizada = [...dbPeliculas, nuevaPeli];
    }
    setDbPeliculas(listaActualizada);
    setLSItems("db_peliculas", listaActualizada);
    setShowModal(false);
  };

  const handleDelete = (codigo) => {
    if (window.confirm("¿Borrar película?")) {
      const nuevaLista = dbPeliculas.filter(p => p.codigo !== codigo);
      setDbPeliculas(nuevaLista);
      setLSItems("db_peliculas", nuevaLista);
    }
  };

  const handleStar = (codigo) => {
    const nuevaLista = dbPeliculas.map(p => ({ ...p, destacada: p.codigo === codigo }));
    setDbPeliculas(nuevaLista);
    setLSItems("db_peliculas", nuevaLista);
  };

  return (
    <div className="admin-container">
      <div className="admin-panel">
        <div className="admin-header">
          <h2>Panel de Administración</h2>
          <button className="btn-add-movie text-white p-2" onClick={() => { setPeliEditando(null); setShowModal(true); }}>
            + AGREGAR PELÍCULA
          </button>
        </div>
        <div className="table-responsive">
          <table className="admin-table">
          </table>
        </div>
        <div className="table-responsive"> 
          <table className="admin-table">
            <thead>
              <tr><th>Título</th><th>Categoría</th><th>Publicado</th><th>Acciones</th></tr>
            </thead>
            <tbody>
              {dbPeliculas.map(p => (
                <tr key={p.codigo}>
                  <td>{p.nombre} {p.destacada && "⭐"}</td>
                  <td>{p.categoria}</td>
                  <td>{p.publicado ? "✅" : "❌"}</td>
                  <td className="actions">
                    <FaEdit onClick={() => { setPeliEditando(p); setShowModal(true); }} />
                    <FaTrash className="text-danger" onClick={() => handleDelete(p.codigo)} />
                    <FaStar className={p.destacada ? "text-warning" : ""} onClick={() => handleStar(p.codigo)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <NuevaPeliculaModal show={showModal} onClose={() => setShowModal(false)} onSave={handleSave} pelicula={peliEditando} />
    </div>
  );
}

export default Admin;