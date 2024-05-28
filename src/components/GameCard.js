// src/components/GameCard.js
import React from 'react';
import '../styles/GameCard.css'; // Asumiendo que tienes estilos en este archivo

function GameCard({ game }) {
  return (
    <div className="game-card" onClick={() => console.log("Abrir popup para", game.title)}>
      <img src={game.imageUrl} alt={game.title} />
      <div className="game-info">
        <h3>{game.title}</h3>
        <p>{game.price}</p>
      </div>
    </div>
  );
}

export default GameCard;
