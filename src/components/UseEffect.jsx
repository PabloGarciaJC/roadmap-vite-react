// components/LabUseEffect.jsx
import React, { useState, useEffect } from "react";
import { FaClock, FaToggleOn, FaSyncAlt, FaDatabase, FaHashtag } from "react-icons/fa";

export default function LabUseEffect() {
  // Contador automático
  const [contador, setContador] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setContador(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Toggle de visibilidad
  const [visible, setVisible] = useState(true);

  // Reloj
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const reloj = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(reloj);
  }, []);

  // Efecto con dependencia
  const [nombre, setNombre] = useState("React");
  useEffect(() => {
    console.log("El nombre cambió a:", nombre);
  }, [nombre]);

  // Fetch simulado
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(res => setTimeout(res, 1000));
      setDatos({ id: 1, titulo: "Dato simulado" });
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaSyncAlt className="icon" /> Laboratorio de useEffect
      </h1>

      {/* Descripción */}
      <div className="card card-warning">
        <strong>¿Qué hace useEffect?</strong>
        <p>useEffect permite ejecutar código después del renderizado. Se usa para efectos secundarios como timers, fetch de datos, suscripciones, o reaccionar a cambios de estado o props.</p>
      </div>

      {/* Contador automático */}
      <div className="card card-warning">
        <FaHashtag className="icon" /> <strong>Contador automático:</strong> {contador}
      </div>

      {/* Toggle */}
      <div className="card card-warning">
        <FaToggleOn className="icon" /> <strong>Toggle de visibilidad:</strong>
        <button className="btn" onClick={() => setVisible(!visible)}>
          {visible ? "Ocultar" : "Mostrar"} componente
        </button>
        {visible && <p className="text-green-600">¡Componente visible!</p>}
      </div>

      {/* Reloj */}
      <div className="card card-warning">
        <FaClock className="icon" /> <strong>Hora actual:</strong> {hora}
      </div>

      {/* Efecto con dependencia */}
      <div className="card card-warning">
        <strong>Cambio de nombre:</strong>
        <input
          className="input"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <p>Nombre actual: {nombre}</p>
      </div>

      {/* Fetch simulado */}
      <div className="card card-warning">
        <FaDatabase className="icon" /> <strong>Datos simulados:</strong>
        {datos ? <pre className="code-block">{JSON.stringify(datos, null, 2)}</pre> : "Cargando..."}
      </div>
    </div>
  );
}
