"use client";

import { useState } from "react";

interface Participante {
  id: number;
  nombre: string;
  numero: string;
}

export default function RegistrarParticipantes() {
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");

  const agregarParticipante = () => {
    if (nombre.trim() && numero.trim()) {
      const nuevoParticipante = { id: Date.now(), nombre, numero };
      setParticipantes([...participantes, nuevoParticipante]);
      setNombre("");
      setNumero("");
    }
  };

  const eliminarParticipante = (id: number) => {
    setParticipantes(participantes.filter(p => p.id !== id));
  };

  return (
    <div className="dashboard-content fade-in">
      <h1 className="dashboard-title">📝 Registrar Participantes</h1>
      <div className="glass-card">
        <input className="input-field" type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        <input className="input-field" type="text" placeholder="Número" value={numero} onChange={e => setNumero(e.target.value)} />
        <button className="neon-button" onClick={agregarParticipante}>Agregar</button>
      </div>

      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Número</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {participantes.map(p => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.numero}</td>
                <td>
                  <button className="neon-button" onClick={() => eliminarParticipante(p.id)}>❌ Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
