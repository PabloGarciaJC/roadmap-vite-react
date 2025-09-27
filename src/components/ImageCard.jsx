import React from "react";

export default function ImageCard({ image }) {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.title} />
      <h3>{image.title}</h3>
    </div>
  );
}
