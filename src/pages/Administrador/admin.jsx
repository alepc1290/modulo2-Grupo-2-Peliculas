import { useState, useEffect } from "react";
import { getLSItems, setLSItems } from "../../utils/function";
import NuevaPeliculaModal from "../../components/Modal/modal"; 
import { FaTrash, FaEdit, FaStar } from "react-icons/fa";
// 1. IMPORTANTE: Conectar el CSS
import "./admin.css"; 

function Admin() {
  const [dbPeliculas, setDbPeliculas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [peliEditando, setPeliEditando] = useState(null);

  useEffect(() => {
    const datos = getLSItems("db_peliculas");
    if (datos) {
      setDbPeliculas(datos);
    } else {
      setDbPeliculas([]); 
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
    if (window.confirm("¿Seguro que querés borrar esta película?")) {
      const listaActualizada = dbPeliculas.filter(p => p.codigo !== codigo);
      setDbPeliculas(listaActualizada);
      setLSItems("db_peliculas", listaActualizada);
    }
  };

  const handleStar = (codigo) => {
    const listaActualizada = dbPeliculas.map(p => ({
      ...p,
      destacada: p.codigo === codigo 
    }));
    setDbPeliculas(listaActualizada);
    setLSItems("db_peliculas", listaActualizada);
  };

  return (
    // 2. Aplicamos 'admin-container' para el espaciado superior
    <div className="admin-container"> 
      
      {/* 3. El 'admin-panel' da el fondo con sombra y bordes redondeados */}
      <div className="admin-panel">
        
        {/* 4. Estructura del Header según tu CSS */}
        <div className="admin-header">
          <h2>Panel de Administración</h2>
          <button 
            className="btn-add-movie text-white p-2" 
            onClick={() => { setPeliEditando(null); setShowModal(true); }}
          >
            + AGREGAR PELÍCULA
          </button>
        </div>

        {/* 5. Cambiamos a 'admin-table' */}
        <table className="admin-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Categoría</th>
              <th>Publicado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dbPeliculas.map(p => (
              <tr key={p.codigo}>
                <td>{p.nombre} {p.destacada && "⭐"}</td>
                <td>{p.categoria}</td>
                <td>{p.publicado ? "✅ SI" : "❌ NO"}</td>
                {/* 6. Envolvemos en 'actions' para que los iconos sean violetas */}
                <td className="actions">
                  <FaEdit onClick={() => { setPeliEditando(p); setShowModal(true); }} />
                  <FaTrash className="text-danger" onClick={() => handleDelete(p.codigo)} />
                  <FaStar 
                    className={p.destacada ? "text-warning" : ""} 
                    onClick={() => handleStar(p.codigo)} 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <NuevaPeliculaModal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
        onSave={handleSave} 
        pelicula={peliEditando} 
      />
    </div>
  );
}

export default Admin;