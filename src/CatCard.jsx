import React from "react";
import './CatCard.css'
import Tooltip from "./Tooltip";
import { Link } from "react-router-dom";

export default function CatCard({ detalhes }) {
  return (
    <div className="card-gato">
      <h3 className="nome-raca">{detalhes.name}</h3>
      <div className="origem">
        <h5 className="titulo-origem">Origem:</h5>{" "}
        <h5 className="lugar-origem">{detalhes.origin}</h5>
      </div>

      {detalhes.image_link && (
        <img className="img-gato" src={detalhes.image_link} alt="" />
      )}

      <Tooltip texto="Clique para saber mais detalhes">
        <Link to={"gato/" + detalhes.name} className="ver-mais">Ver mais...</Link>
      </Tooltip>
    </div>
  );
}
