// src/components/GameContainer.js
import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import db from '../firebaseConfig'; // Asumiendo que configuras Firestore en este archivo

function GameContainer() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    db.collection('games').get().then(snapshot => {
      const gamesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGames(gamesData);
    });
  }, []);

  return (
    <div className="game-container">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameContainer;
