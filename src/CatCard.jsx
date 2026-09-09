import React from "react";

export default function CatCard({ detalhes }) {
  return (
    <div>
      <h3>{detalhes.name}</h3>
      <p>
        <strong>Origem:</strong> {detalhes.origin}
      </p>

      {detalhes.image_link && <img src={detalhes.image_link} alt="" />}
      <button>Ver mais...</button>
    </div>
  );
}
