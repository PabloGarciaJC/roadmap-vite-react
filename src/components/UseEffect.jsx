// components/LabUseEffect.js
import React, { useState, useEffect } from "react";

export default function LabUseEffect() {
  // ⏱ Contador con intervalo
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setContador(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer); // limpieza al desmontar
  }, []);

  // 👀 Toggle de visibilidad
  const [visible, setVisible] = useState(true);

  // 📅 Hora actual
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const reloj = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(reloj);
  }, []);

  // 📦 Efecto con dependencia
  const [nombre, setNombre] = useState("React");
  useEffect(() => {
    console.log("El nombre cambió a:", nombre);
  }, [nombre]); // solo se ejecuta cuando cambia 'nombre'

  // 💾 Fetch simulado
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(res => setTimeout(res, 1000)); // simulación delay
      setDatos({ id: 1, titulo: "Dato simulado" });
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Laboratorio de useEffect
      </h1>

      {/* Descripción */}
      <div style={{ marginBottom: "1rem", padding: "0.75rem", backgroundColor: "#fef3c7", borderLeft: "4px solid #f59e0b", borderRadius: "4px" }}>
        <strong>¿Qué hace useEffect?</strong>  
        <p>useEffect es un hook de React que permite ejecutar código después del renderizado. Se usa para efectos secundarios como timers, fetch de datos, suscripciones, o reaccionar a cambios de estado o props.</p>
      </div>

      {/* Contador automático */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Contador automático:</strong> {contador}
      </div>

      {/* Toggle */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Toggle de visibilidad:</strong>{" "}
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Ocultar" : "Mostrar"} componente
        </button>
        {visible && <p>¡Componente visible!</p>}
      </div>

      {/* Reloj */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Hora actual:</strong> {hora}
      </div>

      {/* Efecto con dependencia */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Cambio de nombre:</strong>{" "}
        <input value={nombre} onChange={e => setNombre(e.target.value)} />
        <p>Nombre actual: {nombre}</p>
      </div>

      {/* Fetch simulado */}
      <div style={{ marginBottom: "1rem" }}>
        <strong>Datos simulados:</strong>{" "}
        {datos ? <pre>{JSON.stringify(datos, null, 2)}</pre> : "Cargando..."}
      </div>
    </div>
  );
}
