import React, { useState } from 'react';
import MovieRow from '../../components/MovieRow/movieRow';
import FeaturedMovie from './Destacada';
import { getLSItems } from '../../utils/function';

// 1. CORRECCIÓN DEL IMPORT: Traemos el Componente, no el video
// Fijate que la ruta apunta a 'components', no a 'vid'
import Intro from '../../components/Modal/modal'; // ESPERÁ, vi que en tu carpeta se llama 'intro' minúscula
// IMPORT CORRECTO SEGÚN TU CARPETA DE LA FOTO:
import IntroComponent from '../../components/intro/intro'; 

const Home = ({ searchTerm = "" }) => {
  
  // 2. CORRECCIÓN DEL ESTADO (Lazy State)
  // Esto elimina el error rojo de "setState synchronously"
  // Le preguntamos a la memoria ANTES de dibujar la pantalla
  const [showIntro, setShowIntro] = useState(() => {
    const yaVioIntro = sessionStorage.getItem("intro_nebula_seen");
    return !yaVioIntro; // Si no hay nada guardado, devuelve true (mostrar video)
  });

  const handleIntroFinish = () => {
    setShowIntro(false);
    sessionStorage.setItem("intro_nebula_seen", "true");
  };

  const todasLasPelis = getLSItems("db_peliculas") || [];

  const filtrar = (cat) => todasLasPelis.filter(p => {
    if (!p.publicado) return false;
    const nombrePeli = p.nombre || p.titulo || "";
    return p.categoria === cat && nombrePeli.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const terror = filtrar("Terror");
  const comedia = filtrar("Comedia");
  const animados = filtrar("Animados");

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
      {/* Usamos el componente importado correctamente */}
      {showIntro && <IntroComponent onFinish={handleIntroFinish} />}

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