// components/RouterEjemplo.js
import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function Home() { return <h2>🏠 Home</h2>; }
function About() { return <h2>ℹ️ About</h2>; }

export default function RouterEjemplo() {
  return (
    <div>
      <h1>🛤️ React Router</h1>
      <Link to="/router/home">Home</Link> | <Link to="/router/about">About</Link>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
