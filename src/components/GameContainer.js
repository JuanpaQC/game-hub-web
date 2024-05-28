// src/components/GameContainer.js
import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import db from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import '../styles/GameContainer.css';

function GameContainer({ onGameClick }) {
  const [games, setGames] = useState([]);
  const [visibleGames, setVisibleGames] = useState(10); // Número inicial de juegos mostrados

  useEffect(() => {
    const fetchGames = async () => {
      const docRef = doc(db, 'Juegos', 'zyllujggk3ScgK8kUCEt');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const gamesData = docSnap.data();
        const gamesList = Object.entries(gamesData).map(([title, data]) => ({
          title,
          ...data
        }));
        setGames(gamesList);
      } else {
        console.log("No such document!");
      }
    };

    fetchGames();
  }, []);

  const loadMoreGames = () => {
    setVisibleGames(prevVisibleGames => prevVisibleGames + 10); // Incrementa el número de juegos visibles
  };

  return (
    <div className="game-container-wrapper">
      <h2>Todos los Juegos</h2>
      <div className="game-container">
        {games.slice(0, visibleGames).map(game => (
          <GameCard key={game.title} game={game} onClick={() => onGameClick(game)} />
        ))}
      </div>
      {visibleGames < games.length && (
        <button onClick={loadMoreGames} className="load-more">Cargar más juegos</button>
      )}
    </div>
  );
}

export default GameContainer;
