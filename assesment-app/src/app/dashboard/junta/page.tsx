"use client";

import { useRouter } from "next/navigation";

export default function JuntaPage() {
  const router = useRouter();

  return (
    <div className="dashboard-content fade-in">
      <h1 className="dashboard-title">⚖️ Panel de la Junta</h1>
      <p className="dashboard-subtitle">Seleccione una opción para continuar.</p>

      <div className="options-container">
        <div className="option-card" onClick={() => router.push("/dashboard/junta/dashboard")}>
          <h2>📊 Ver Dashboard</h2>
          <p>Consulta el desempeño y estado de los participantes.</p>
        </div>

        <div className="option-card" onClick={() => router.push("/dashboard/junta/grupos")}>
          <h2>🎲 Generar Grupos Aleatorios</h2>
          <p>Organiza a los participantes en grupos de manera automática.</p>
        </div>
      </div>
    </div>
  );
}
