"use client";

import { useState } from "react";

export default function CalificarParticipantes() {
  const [grupo, setGrupo] = useState("");
  const [participante, setParticipante] = useState("");
  const [competencia, setCompetencia] = useState("");
  const [calificacion, setCalificacion] = useState("");

  const enviarCalificacion = () => {
    if (grupo && participante && competencia && calificacion) {
      alert(`✅ Calificación enviada: ${calificacion} para ${participante} en ${competencia}`);
    }
  };

  return (
    <div className="dashboard-content fade-in">
      <h1 className="dashboard-title">🏆 Calificar Participantes</h1>
      <div className="glass-card">
        <select className="custom-select" onChange={e => setGrupo(e.target.value)}>
          <option value="">Seleccionar Grupo</option>
          <option value="Grupo A">Grupo A</option>
          <option value="Grupo B">Grupo B</option>
        </select>

        <select className="custom-select" onChange={e => setParticipante(e.target.value)}>
          <option value="">Seleccionar Participante</option>
          <option value="Kevin Quiroz">Kevin Quiroz</option>
          <option value="Juan Pérez">Juan Pérez</option>
        </select>

        <select className="custom-select" onChange={e => setCompetencia(e.target.value)}>
          <option value="">Seleccionar Competencia</option>
          <option value="Trabajo en equipo">Trabajo en equipo</option>
          <option value="Perseverancia">Perseverancia</option>
        </select>

        <input className="input-field" type="number" min="1" max="5" placeholder="Calificación (1-5)" onChange={e => setCalificacion(e.target.value)} />

        <button className="neon-button" onClick={enviarCalificacion}>Enviar Calificación</button>
      </div>
    </div>
  );
}
