// src/components/GamePopup.js
import React from 'react';
import '../styles/GamePopup.css'; // Asegúrate de que este archivo tenga los estilos correctos

function GamePopup({ game, onClose }) {
  if (!game) return null;

  return (
    <div className="game-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>Cerrar</button>
        <h2 className='title'>{game.title}</h2>
        <img src={game.img} alt={game.title} />
        {game.g2a_price && <p className='p'>G2A Price: {game.g2a_price}</p>}
        {game.Steam_price && <p className='p'>Steam Price: {game.Steam_price}</p>}
        {game.IG_price && <p className='p'>Instant Gaming Price: {game.IG_price}</p>}
        {game.IG_discount && <p className='p'>Instant Gaming Discount: {game.IG_discount}</p>}
        {game.metascore && <p className='p'>Metascore: {game.metascore}</p>}
        {game.time && <p className='p'>Playtime: {game.time}</p>}
      </div>
    </div>
  );
}

export default GamePopup;
