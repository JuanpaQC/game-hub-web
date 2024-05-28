// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css'; // Asumiendo que tienes estilos en este archivo

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Info de Videojuegos</h1>
      <button>Steam</button>
      <button>G2A</button>
      <button>Instant Gaming</button>
    </nav>
  );
}

export default Navbar;
