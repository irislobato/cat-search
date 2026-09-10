import { useEffect, useState } from "react";
import CatCard from "../CatCard";
import "./Home.css";

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const apiKey = "BIWpGH9BLbqEQPLm8f7m2F9toJeIksyo8aBIZtkB";
      const url = "https://api.api-ninjas.com/v1/cats?min_weight=1&limit=15";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        setCats(data);
      } catch (erro) {
        console.error("Ocorreu um erro ao buscar os dados:", erro);
      }
    }

    buscarDados();
  }, []);

  const [busca, setBusca] = useState("");

  function handleSearchChange(evento) {
    setBusca(evento.target.value);
  }

  const gatosFiltrados = cats.filter((g) =>
    g.name.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="container-layout">
      <input type="text" value={busca} onChange={handleSearchChange} />
      <div className="principal">
        {gatosFiltrados.length > 0 ? (
          gatosFiltrados.map((gato, index) => <CatCard key={index} detalhes={gato} />)
        ) : (
          <p className="buscando-gatinhos">Carregando gatinhos...</p>
        )}
      </div>
    </div>
  );
}
