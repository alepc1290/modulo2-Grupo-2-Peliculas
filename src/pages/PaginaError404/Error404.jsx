import React from 'react';
import "./Error404.css";
import video404 from "../../vid/Error404VID.mp4";
import { useNavigate } from 'react-router';


function Error404() {
  const navigate = useNavigate();
  return (
    <div className="error404-container">
      <video
        className="error404-video"
        src={video404}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="error404-content">
        <button className="btn-animated-border" onClick={() => navigate('/Home')}>
          PAGINA PRINCIPAL
        </button>
      </div>
    </div>
  );
}

export default Error404;