import React from 'react'
import MovieRow from '../../components/MovieRow/movieRow'

function Home() {
  return (
    <>
      <div className="container mt-5 text-light">
        <h1>HOME</h1>
        <p>Contenido del home</p>
      </div>

      <MovieRow title="Populares" />
      <MovieRow title="Tendencias" />
      <MovieRow title="Estrenos" />
    </>
  )
}

export default Home
