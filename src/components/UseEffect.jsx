// components/UseEffect.js
import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>⏳ useEffect</h1>
      <p>Hora actual: {hora}</p>
    </div>
  );
}
