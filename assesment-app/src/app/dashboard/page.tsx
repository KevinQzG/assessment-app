"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/app/components/Card";

const data = [
  { name: "Ene", valor: 20 },
  { name: "Feb", valor: 35 },
  { name: "Mar", valor: 45 },
  { name: "Abr", valor: 60 },
  { name: "May", valor: 80 },
  { name: "Jun", valor: 100 },
];

export default function DashboardPage() {
  return (
    <div className="dashboard-content">
      <h1 className="dashboard-title">Panel Principal</h1>
      <div className="dashboard-grid">
        <Card title="Progreso Mensual">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Line type="monotone" dataKey="valor" stroke="#FF00FF" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
