import React from 'react'
import MovieCard from '../MovieCard/movieCard'

function MovieRow({ title }) {
  return (
    <div className="container my-4">
      <h4 className="mb-3">{title}</h4>

      <div className="d-flex overflow-auto gap-3">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}

export default MovieRow
