import { useEffect, useState } from "react";
import CatCard from "./CatCard";

export default function App() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const apiKey = "BIWpGH9BLbqEQPLm8f7m2F9toJeIksyo8aBIZtkB";
      const url = "https://api.api-ninjas.com/v1/cats";

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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Buscador de Gatos 🐾</h1>

      {/* Verifica se a lista tem itens. Se tiver, desenha os cards. Se não, mostra "Carregando" */}
      {cats.length > 0 ? (
        cats.map((gato, index) => (
          // Usando o componente CatCard que você importou lá em cima
          <CatCard key={index} detalhes={gato} />
        ))
      ) : (
        <p>Carregando gatos...</p>
      )}
    </div>
  );
}
