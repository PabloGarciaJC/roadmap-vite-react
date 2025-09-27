import React from "react";
import ImageCard from "./ImageCard";
import images from "../data/images.json";

export default function Gallery() {
  return (
    <div className="gallery">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
}
