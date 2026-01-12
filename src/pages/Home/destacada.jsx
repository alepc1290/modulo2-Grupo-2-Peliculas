import React from 'react';
import './destacada.css';
import { useNavigate } from 'react-router';

const FeaturedMovie = ({ movie }) => {
    const navigate = useNavigate();
    return (
        <section
            className="featured-movie"
            style={{
                backgroundImage: `linear-gradient(to right, #000 20%, transparent 80%), url(${movie.backdrop})`
            }}
        >
            <div className="featured-content">
                <p className="featured-badge">DESTACADA</p>
                
                <h1 className="featured-title">{movie.titulo}</h1>
                
                <p className="featured-description">
                    {movie.descripcion}
                </p>
                
                <div className="featured-buttons">
                    <button className="btn-animated-border" onClick={() => navigate('/register')}>
                        REPRODUCIR
                    </button>
                    <button className="btn-more" onClick={() => navigate('/register')}>
                        VER MÁS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMovie;