import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalhes() {
  const { nome } = useParams();
  const [detalhes, setDetalhes] = useState(null);

  useEffect(() => {
    async function buscarDetalhes() {
      const apiKey = "BIWpGH9BLbqEQPLm8f7m2F9toJeIksyo8aBIZtkB";
     const url = `https://api.api-ninjas.com/v1/cats?name=${nome}`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { "X-Api-Key": apiKey, "Content-Type": "application/json" },
        });
        const data = await response.json();

        if (data.length > 0) {
          setDetalhes(data[0]);
        }
      } catch (erro) {
        console.error("Erro ao buscar detalhes:", erro);
      }
    }
    buscarDetalhes();
  }, [nome]);

  if (!detalhes)
    return <p>Carregando dados do gatinho...</p>;

  return (
    <div>
      <h1>{detalhes.name}</h1>
      {detalhes.image_link && <img src={detalhes.image_link} alt="" />}
      <div className="grid-info">
        <div className="origem">
          <h4 className="titulo-info">Origem:</h4>
          <h4 className="detalhes-info">{detalhes.origin}</h4>
        </div>
        <div className="grid-info">
          <h4 className="titulo-info">Tempo de vida:</h4>
          <h4 className="detalhes-info">
            {detalhes.min_life_expectancy} - {""} {detalhes.max_life_expectancy}{" "}
            anos
          </h4>
        </div>
      </div>
      <div className="grid-info">
        <h4 className="titulo-info">{detalhes.intelligence}Inteligência:</h4>
        <h4 className="detalhes-info"></h4>
      </div>
      <div className="grid-info">
        <h4 className="titulo-info">{detalhes.intelligence}Comportamento com crianças:</h4>
        <h4 className="detalhes-info">{detalhes.children_friendly} / 5</h4>
      </div>
    </div>
  );
}
