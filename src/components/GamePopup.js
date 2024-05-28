// src/components/GamePopup.js
import React from 'react';
import '../styles/GamePopup.css'; // Asumiendo que tienes estilos en este archivo

function GamePopup({ game, onClose }) {
  if (!game) return null;

  return (
    <div className="game-popup">
      <div className="popup-content">
        <button onClick={onClose}>Cerrar</button>
        <h2>{game.title}</h2>
        <img src={game.imageUrl} alt={game.title} />
        <p>{game.description}</p>
        {/* Más información como requisitos, precio, etc. */}
      </div>
    </div>
  );
}

export default GamePopup;
