import React from 'react';
import './Versus.css';

const VersusImage = ({ leftImage, rightImage }) => {
  return (
    <div className="versus-container w-24 h-24 object-cover rounded">
      <img src={leftImage} alt="Left" className="versus-image left" />
      <div className="versus-text">VS</div>
      <img src={rightImage} alt="Right" className="versus-image right" />
    </div>
  );
};

export default VersusImage;
