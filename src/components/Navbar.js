// src/components/Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../imgs/game-hub-png.png'; // Importa la imagen del logo

function Navbar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Game Hub Logo" className="navbar-logo" />
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Buscar juego..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>
    </nav>
  );
}

export default Navbar;
