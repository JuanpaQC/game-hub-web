// src/components/GameCard.js
import React from 'react';
import '../styles/GameCard.css';

function GameCard({ game, onClick }) {
  return (
    <div className="game-card" onClick={onClick}>
      <img src={game.img} alt={game.title} />
      <h3>{game.title}</h3>
    </div>
  );
}

export default GameCard;
