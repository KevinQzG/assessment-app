"use client";

import { Box, Typography } from "@mui/material";

interface StatsCardProps {
  title: string;
  value: string;
  color: string;
}

export default function StatsCard({ title, value, color }: StatsCardProps) {
  return (
    <Box className="stats-card" sx={{ backgroundColor: color }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h3">{value}</Typography>
    </Box>
  );
}
