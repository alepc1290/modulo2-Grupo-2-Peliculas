import React from 'react'
import "./movieCard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

function MovieCard({ imagen, titulo, }) {
  const navigate = useNavigate();
  return (
    <div className="movie-card">

      <img
        src={imagen}
        className="movie-card-img"
        alt={titulo}
      />

      <div className="movie-card-overlay">
        <h5 className="overlay-title">{titulo}</h5>
        <button className="btn-ver" onClick={() => navigate('/login')}>
          VER
        </button>
      </div>
    </div>
  );
}


export default MovieCard
