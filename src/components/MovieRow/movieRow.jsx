import React from 'react'
import MovieCard from '../MovieCard/movieCard' 
import "./movieRow.css"

const MovieRow = ({ title, movies }) => {
  return (
    <section className="movie-row">
      <h4 className="mb-3">{title}</h4>

      <div className="movie-row-list">
        
        {movies && movies.map((movie) => (
          <MovieCard
            key={movie.id} 
            imagen={movie.imagen}
            titulo={movie.titulo}
            texto={movie.texto} 
            linkeo={movie.linkeo}
          />
        ))}
      </div>
    </section>
  )
}

export default MovieRow