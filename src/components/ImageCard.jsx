import React from "react";
import "./ImageCard.css"; // Opcional si quieres estilos separados

export default function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} />
      <h3>{image.title}</h3>
    </div>
  );
}
