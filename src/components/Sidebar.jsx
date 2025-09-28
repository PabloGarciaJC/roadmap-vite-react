import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar p-4 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">📘 Dashboard de Prácticas React</h2>
      <ul className="space-y-2">
        <li><Link to="/">🚀 Introducción a React</Link></li>
        <li><Link to="/componentes">🧩 Componentes</Link></li>
        <li><Link to="/jsx">🔤 JSX</Link></li>
        <li><Link to="/props">📥 Props</Link></li>
        <li><Link to="/estado">⚡ useState</Link></li>
        <li><Link to="/useeffect">⏳ useEffect</Link></li>
        <li><Link to="/usecontext">🌍 useContext</Link></li>
        <li><Link to="/usecallback">🧠 useCallback</Link></li>
        <li><Link to="/usememo">🧪 useMemo</Link></li>
        <li><Link to="/eventos">🎛️ Manejo de eventos</Link></li>
        <li><Link to="/listas">📋 Renderizado de listas y condicional</Link></li>
        <li><Link to="/routers">🛤️ React Router</Link></li>
        <li><Link to="/formularios">✍️ Formularios</Link></li>
        <li><Link to="/optimizar">⚙️ Optimización avanzada</Link></li>
      </ul>
    </div>
  );
}
