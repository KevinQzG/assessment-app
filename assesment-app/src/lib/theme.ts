import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7527C9",  // Color Base
      light: "#135CE3", // Azul Primario
      dark: "#542CB3",  // Morado Primario
      contrastText: "#F2F3FB", // Texto sobre primario
    },
    secondary: {
      main: "#DB0083", // Rosa Secundario
      light: "#FF7108", // Naranja Secundario
      dark: "#1E001F",  // Negro Secundario
      contrastText: "#FFFFFF",
    },
    error: { main: "#FF296E" },
    warning: { main: "#FFD000" },
    info: { main: "#5271FF" },
    success: { main: "#D5FE00" },
    background: {
      default: "#F2F3FB", // Fondo general
      paper: "#FFFFFF",
    },
    text: {
      primary: "#060606",
      secondary: "#001842",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Sora", "sans-serif"].join(","),
  },
});

export default theme;
