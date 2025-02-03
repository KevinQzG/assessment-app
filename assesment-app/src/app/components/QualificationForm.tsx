"use client";

import { useState } from "react";
import { Box, Typography, Button, Select, MenuItem, TextField } from "@mui/material";

interface Participant {
  id: number;
  name: string;
  number: number;
  group: string;
}

const groups = ["A", "B", "C", "D"];

const participants: Participant[] = [
  { id: 1, name: "Kevin Quiroz", number: 30, group: "A" },
  { id: 2, name: "Sofía Builes", number: 12, group: "A" },
  { id: 3, name: "Santiago Gómez", number: 8, group: "B" },
  { id: 4, name: "Juan Lizcano", number: 21, group: "C" },
];

export default function EvaluationForm() {
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [selectedParticipant, setSelectedParticipant] = useState<string>("");
  const [scores, setScores] = useState<{ [key: string]: number }>({
    competencia1: 1,
    competencia2: 1,
    competencia3: 1,
  });

  const handleScoreChange = (competencia: string, value: number) => {
    setScores((prevScores) => ({ ...prevScores, [competencia]: value }));
  };

  const handleSubmit = () => {
    const promedio = ((scores.competencia1 + scores.competencia2 + scores.competencia3) / 3).toFixed(2);
    alert(`Evaluación guardada para ${selectedParticipant} (Grupo ${selectedGroup}) - Promedio: ${promedio}`);
  };

  return (
    <Box className="glass-card fade-in">
      <Typography variant="h4" className="dashboard-title">
        📊 Evaluación de Participantes
      </Typography>

      {/* 🔹 Seleccionar Grupo */}
      <Select
        value={selectedGroup}
        onChange={(e) => setSelectedGroup(e.target.value)}
        displayEmpty
        className="custom-select"
      >
        <MenuItem value="" disabled>Seleccionar Grupo</MenuItem>
        {groups.map((group, index) => (
          <MenuItem key={index} value={group}>
            🏫 Grupo {group}
          </MenuItem>
        ))}
      </Select>

      {/* 🔹 Seleccionar Participante */}
      {selectedGroup && (
        <Select
          value={selectedParticipant}
          onChange={(e) => setSelectedParticipant(e.target.value)}
          displayEmpty
          className="custom-select"
          sx={{ mt: 2 }}
        >
          <MenuItem value="" disabled>Seleccionar Participante</MenuItem>
          {participants
            .filter((p) => p.group === selectedGroup)
            .map((p) => (
              <MenuItem key={p.id} value={p.name}>
                👤 {p.name} - {p.number}
              </MenuItem>
            ))}
        </Select>
      )}

      {/* 🔥 Campos de Evaluación */}
      {selectedParticipant && (
        <>
          {Object.keys(scores).map((competencia, index) => (
            <TextField
              key={index}
              label={`📌 Competencia ${index + 1}`}
              type="number"
              inputProps={{ min: 1, max: 5 }}
              value={scores[competencia]}
              onChange={(e) => handleScoreChange(competencia, parseInt(e.target.value))}
              className="input-field"
              margin="normal"
            />
          ))}

          <Button className="neon-button" sx={{ mt: 3 }} onClick={handleSubmit}>
            💾 Guardar Evaluación
          </Button>
        </>
      )}
    </Box>
  );
}
