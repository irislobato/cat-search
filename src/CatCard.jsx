import { useEffect, useState } from "react";

import React from 'react'

export default function CatCard({ catUrl }) {
    const [detalhes, setDetalhes] = useState(null);
    
    useEffect(() => {
        async function buscarDetalhes() {
            const response = await fetch(catUrl);
            const data = await response.json();
            setDetalhes(data);
        }
        buscarDetalhes();
    }, []);
    
    return (
        <div>
            {detalhes ? (
                <div>

                </div>
            ) : (
                "Carregando..."
            )}
        </div>
    );
}
