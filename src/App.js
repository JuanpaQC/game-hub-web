import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GameContainer from './components/GameContainer';
import GamePopup from './components/GamePopup';
import './App.css';

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const handleClosePopup = () => {
    setSelectedGame(null);
  };

  return (
    <div className="App">
      <Navbar />
      <GameContainer onGameClick={handleGameClick} />
      {selectedGame && <GamePopup game={selectedGame} onClose={handleClosePopup} />}
    </div>
  );
}

export default App;
