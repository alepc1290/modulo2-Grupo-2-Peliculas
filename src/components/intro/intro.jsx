import introVideo from '../../vid/introNebula.mp4';
import './intro.css'; 

const Intro = ({ onFinish }) => {
  return (
    <div className="intro-overlay">
      <video 
        src={introVideo} 
        autoPlay 
        muted 
        playsInline
        onEnded={onFinish} 
        className="intro-video"
      />
      <button className="skip-btn" onClick={onFinish}>SALTAR INTRO ⏭</button>
    </div>
  );
};

export default Intro;