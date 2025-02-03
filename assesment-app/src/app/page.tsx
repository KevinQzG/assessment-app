"use client";

import { useRouter } from "next/navigation";
import { Button, Box, Typography } from "@mui/material";

export default function LandingPage() {
  const router = useRouter();

  return (
    <Box className="center-container">
      <Box sx={{ mt: { xs: -5, sm: -8, md: -10 } }}> {/* 🔼 Ajuste responsive */}
        <Typography variant="h2" className="fade-in title">
          Assessment <span style={{ color: "#FF00FF" }}>NOVA 2025-1</span>
        </Typography>
        <Typography className="subtitle fade-in" sx={{ mt: 2 }}>
          Gracias a tu ayuda, nuestro grupo seguirá creciendo.
        </Typography>
        <Button className="neon-button fade-in" sx={{ mt: 3, px: 4, py: 2 }} onClick={() => router.push("/login")}>
          Iniciar Sesión
        </Button>
      </Box>
    </Box>
  );
}
