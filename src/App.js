// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GameContainer from './components/GameContainer';
import GamePopup from './components/GamePopup';
import './styles/App.css'; // Asegúrate de tener estilos básicos para App

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  // Función para seleccionar un juego y abrir el popup
  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  // Función para cerrar el popup
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
