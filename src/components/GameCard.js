// src/components/GameCard.js
import React from 'react';

function GameCard({ game, onClick }) {
  return (
    <div className="game-card" onClick={onClick}>
      <img src={game.imageUrl} alt={game.title} />
      <div className="game-info">
        <h3>{game.title}</h3>
        <p>{game.price}</p>
      </div>
    </div>
  );
}

export default GameCard;
