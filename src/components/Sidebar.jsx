import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">Galería</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
        <li><Link to="/configuracion">Configuración</Link></li>
      </ul>
    </div>
  );
}
