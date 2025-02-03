"use client";

import { useState } from "react";
import { Box, Typography, Alert } from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de autenticación con diferentes roles
    if (credentials.username === "admin" && credentials.password === "1234") {
      localStorage.setItem("userRole", "junta"); // Guardar rol
      router.push("/dashboard/junta");
    } else if (credentials.username === "calificador" && credentials.password === "5678") {
      localStorage.setItem("userRole", "calificador"); // Guardar rol
      router.push("/dashboard/calificador");
    } else {
      setError(true);
    }
  };

  return (
    <Box className="glass-card fade-in">
      <Typography variant="h4" className="login-title">
        Iniciar Sesión
      </Typography>
      {error && <Alert severity="error" sx={{ mt: 2 }}>
        Usuario o contraseña incorrectos
      </Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          className="input-field"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="input-field"
          onChange={handleChange}
        />
        <button type="submit" className="neon-button">
          Ingresar
        </button>
      </Box>
    </Box>
  );
}
