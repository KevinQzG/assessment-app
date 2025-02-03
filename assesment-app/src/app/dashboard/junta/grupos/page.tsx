"use client";

import { useState } from "react";

export default function GenerarGrupos() {
  const [cantidad, setCantidad] = useState(3);
  const [grupos, setGrupos] = useState<string[][]>([]);

  const participantes = [
    "Kevin Quiroz", "Juan Pérez", "Lucía Fernández", "Andrés López", "María Gómez",
    "Sofía Ramírez", "Carlos Mendoza", "Elena Ríos", "Diego Navarro", "Fernando Torres",
    "Gabriela Ruiz", "Pablo Sánchez", "Isabel Cano", "Tomás Herrera", "Diana Castro",
    "Rodrigo Vázquez", "Natalia Méndez", "César Rojas", "Valeria Ortega", "Raúl Jiménez",
    "Javier Estrada", "Clara Domínguez", "Ricardo Navas", "Verónica Salas", "Emilio Márquez"
  ];

  const generarGrupos = () => {
    let shuffle = [...participantes].sort(() => Math.random() - 0.5);
    let newGroups: string[][] = Array.from({ length: cantidad }, () => []);

    shuffle.forEach((p, i) => newGroups[i % cantidad].push(p));
    setGrupos(newGroups);
  };

  return (
    <div className="dashboard-content fade-in">
      <h1 className="dashboard-title">🎲 Generar Grupos Aleatorios</h1>
      <p className="dashboard-subtitle">Distribuye los participantes en grupos aleatorios.</p>

      <div className="config-container">
        <div className="glass-card">
          <label className="label-text">Cantidad de grupos:</label>
          <input
            className="input-field"
            type="number"
            min="2"
            max="5"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
          <button className="neon-button" onClick={generarGrupos}>GENERAR</button>
        </div>
      </div>

      {grupos.length > 0 && (
        <div className="groups-container">
          {grupos.map((grupo, i) => (
            <div key={i} className="group-card">
              <h2>Grupo {i + 1}</h2>
              <ul>
                {grupo.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
