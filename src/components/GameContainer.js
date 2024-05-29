// src/components/GameContainer.js
import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import '../styles/GameContainer.css';
import db from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

function GameContainer({ onGameClick, searchTerm }) {
  const [games, setGames] = useState([]);
  const [visibleGames, setVisibleGames] = useState(10);

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
    setVisibleGames(prevVisibleGames => prevVisibleGames + 10);
  };

  const filteredGames = searchTerm
    ? games.filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : games;

  return (
    <div className="game-container-wrapper">
      <h2 className='title1'>Todos los Juegos</h2>
      <div className="game-container">
        {filteredGames.slice(0, visibleGames).map(game => (
          <GameCard key={game.title} game={game} onClick={() => onGameClick(game)} />
        ))}
      </div>
      {visibleGames < filteredGames.length && (
        <button onClick={loadMoreGames} className="load-more">Cargar más juegos</button>
      )}
    </div>
  );
}

export default GameContainer;
