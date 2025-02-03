"use client";

import { useRouter } from "next/navigation";

export default function CalificadorDashboard() {
  const router = useRouter();

  return (
    <div className="dashboard-content fade-in">
      <h1 className="dashboard-title">🎓 Panel del Calificador</h1>
      <p className="dashboard-subtitle">Seleccione una opción para continuar.</p>

      <div className="stats-container">
        <button className="neon-button" onClick={() => router.push("/dashboard/calificador/registrar")}>
          Registrar Participantes
        </button>
        <button className="neon-button" onClick={() => router.push("/dashboard/calificador/calificar")}>
          Calificar Participantes
        </button>
      </div>
    </div>
  );
}
