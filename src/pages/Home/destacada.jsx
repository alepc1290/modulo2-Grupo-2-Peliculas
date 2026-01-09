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
                <h1 className="featured-title">Película destacada</h1>
                <p className="featured-description">
                    {movie.descripcion}
                </p>
                <div className="featured-buttons">
                    <button className="btn-animated-border" onClick={() => navigate('/login')}>
                        REPRODUCIR
                    </button>
                    <button className="btn-more" onClick={() => navigate('/login')}>
                        VER MÁS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMovie;