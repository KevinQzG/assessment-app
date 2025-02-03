"use client";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const data = {
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
  datasets: [
    {
      label: "Evaluaciones completadas",
      data: [30, 50, 80, 60, 100, 120],
      borderColor: "#ff00ff",
      backgroundColor: "rgba(255, 0, 255, 0.2)",
      borderWidth: 2,
    },
  ],
};

export default function Chart() {
  return <Line data={data} />;
}
