import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";
import Favorites from "./components/Favorites";
import Configuracion from "./components/Configuracion";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
      </main>
    </div>
  );
}
