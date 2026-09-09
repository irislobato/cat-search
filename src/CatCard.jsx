import React from "react";
import './CatCard.css'

export default function CatCard({ detalhes }) {
  return (
    <div className="card-gato">
      <h3 className="nome-raca">{detalhes.name}</h3>
      <div className="origem">
        <h5 className="titulo-origem">Origem:</h5> <h5 className="lugar-origem">{detalhes.origin}</h5>
      </div>

      {detalhes.image_link && <img className="img-gato" src={detalhes.image_link} alt="" />}
      <button className="ver-mais">Ver mais...</button>
    </div>
  );
}
