// src/App.js
import React, { useState, useEffect } from 'react';
import GameContainer from './components/GameContainer';
import Navbar from './components/Navbar';
import GamePopup from './components/GamePopup';
import Footer from './components/Footer';
import db from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);

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

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue.toLowerCase());
  };

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const handleClosePopup = () => {
    setSelectedGame(null);
  };

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <GameContainer games={filteredGames} onGameClick={handleGameClick} searchTerm={searchTerm} />
      {selectedGame && <GamePopup game={selectedGame} onClose={handleClosePopup} />}
      <Footer />
    </div>
  );
}

export default App;
