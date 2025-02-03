"use client";

import { useState, useEffect } from "react";

interface Participante {
  id: number;
  nombre: string;
  promedio: number;
}

interface Grupo {
  nombre: string;
  participantes: Participante[];
}

export default function JuntaDashboard() {
  const [grupos, setGrupos] = useState<Grupo[]>([]);

  useEffect(() => {
    setGrupos([
      { nombre: "Grupo A", participantes: [{ id: 1, nombre: "Kevin Quiroz", promedio: 4.5 }, { id: 2, nombre: "Juan Pérez", promedio: 4.2 }, { id: 3, nombre: "Lucía Fernández", promedio: 4.9 }, { id: 4, nombre: "Andrés López", promedio: 3.8 }, { id: 5, nombre: "María Gómez", promedio: 4.0 }] },
      { nombre: "Grupo B", participantes: [{ id: 6, nombre: "Sofía Ramírez", promedio: 4.8 }, { id: 7, nombre: "Carlos Mendoza", promedio: 3.9 }, { id: 8, nombre: "Elena Ríos", promedio: 4.3 }, { id: 9, nombre: "Diego Navarro", promedio: 4.7 }, { id: 10, nombre: "Fernando Torres", promedio: 4.1 }] },
      { nombre: "Grupo C", participantes: [{ id: 11, nombre: "Gabriela Ruiz", promedio: 4.9 }, { id: 12, nombre: "Pablo Sánchez", promedio: 3.7 }, { id: 13, nombre: "Isabel Cano", promedio: 4.5 }, { id: 14, nombre: "Tomás Herrera", promedio: 4.2 }, { id: 15, nombre: "Diana Castro", promedio: 4.8 }] },
      { nombre: "Grupo D", participantes: [{ id: 16, nombre: "Rodrigo Vázquez", promedio: 3.9 }, { id: 17, nombre: "Natalia Méndez", promedio: 4.4 }, { id: 18, nombre: "César Rojas", promedio: 4.6 }, { id: 19, nombre: "Valeria Ortega", promedio: 4.1 }, { id: 20, nombre: "Raúl Jiménez", promedio: 4.0 }] },
      { nombre: "Grupo E", participantes: [{ id: 21, nombre: "Javier Estrada", promedio: 4.3 }, { id: 22, nombre: "Clara Domínguez", promedio: 4.5 }, { id: 23, nombre: "Ricardo Navas", promedio: 4.9 }, { id: 24, nombre: "Verónica Salas", promedio: 3.8 }, { id: 25, nombre: "Emilio Márquez", promedio: 4.2 }] }
    ]);
  }, []);

  const determinarEstado = (promedio: number) => {
    if (promedio >= 4.8) return { texto: "✅ Pasa Directo", clase: "pasa-directo" };
    if (promedio >= 4.0) return { texto: "🟡 Pasa a Entrevista", clase: "pasa-entrevista" };
    return { texto: "❌ No Pasa", clase: "no-pasa" };
  };

  return (
    <div className="dashboard-content fade-in">
      <h1 className="dashboard-title">📊 Panel de la Junta</h1>
      <p className="dashboard-subtitle">Consulta las calificaciones y el estado de cada participante.</p>

      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Participante</th>
              <th>Promedio</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {grupos.map((grupo) =>
              grupo.participantes.map((participante, index) => {
                const estado = determinarEstado(participante.promedio);
                return (
                  <tr key={participante.id}>
                    {index === 0 && (
                      <td rowSpan={grupo.participantes.length} className="group-name">{grupo.nombre}</td>
                    )}
                    <td>{participante.nombre}</td>
                    <td>{participante.promedio.toFixed(2)}</td>
                    <td className={`status-cell ${estado.clase}`}>{estado.texto}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
