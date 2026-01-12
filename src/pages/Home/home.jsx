import React from 'react'
import MovieRow from '../../components/MovieRow/movieRow'
import FeaturedMovie from './Destacada';
import { getLSItems } from '../../utils/function';

const Home = ({ searchTerm = "" }) => {
  // Leemos ÚNICAMENTE de la base de datos para que el Admin tenga el control
  const todasLasPelis = getLSItems("db_peliculas") || [];

  // Función de filtrado SEGURA
  const filtrar = (cat) => todasLasPelis.filter(p => {
    // Requerimiento: Solo mostrar si está PUBLICADO
    if (!p.publicado) return false;

    const nombrePeli = p.nombre || p.titulo || "";
    const coincideBusqueda = nombrePeli.toLowerCase().includes(searchTerm.toLowerCase());
    return p.categoria === cat && coincideBusqueda;
  });

  const terror = filtrar("Terror");
  const comedia = filtrar("Comedia");
  const animados = filtrar("Animados");

  // Buscamos la destacada (la que tiene la estrella en el Admin)
  const peliEstrella = todasLasPelis.find(p => p.destacada === true);
  const destacadaData = peliEstrella ? {
    titulo: peliEstrella.nombre,
    descripcion: peliEstrella.descripcion,
    backdrop: peliEstrella.imagen 
  } : {
    titulo: "Arcane",
    descripcion: "Historia de Piltover y Zaun.",
    backdrop: "https://i.pinimg.com/736x/81/88/24/81882449079972374e74bdcf7065a53a.jpg"
  };

  return (
    <>
      <FeaturedMovie movie={destacadaData} />
      <div className="container text-light mt-4">
        {terror.length > 0 || comedia.length > 0 || animados.length > 0 ? (
          <>
            {terror.length > 0 && <MovieRow title="TERROR" movies={terror.map(p => ({...p, titulo: p.nombre}))} />}
            {comedia.length > 0 && <MovieRow title="COMEDIAS" movies={comedia.map(p => ({...p, titulo: p.nombre}))} />}
            {animados.length > 0 && <MovieRow title="ANIMADAS" movies={animados.map(p => ({...p, titulo: p.nombre}))} />}
          </>
        ) : (
          <div className="text-center mt-5">
            <h2 style={{ color: "#a726ff" }}>🛸 No se encontraron resultados</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;