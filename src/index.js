import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#67be23",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2A132E",
      contrastText: "#fff",
    },
    background: {
      default: "#212121",
      paper: "#242424",
    },
    success: {
      main: "#67be23",
      contrastText: "#fff",
    },
    error: {
      main: "#ee2a1e",
      contrastText: "#fff",
    },
    warning: {
      main: "#fa8c16",
      contrastText: "#fff",
    },
    info: {
      main: "#1890ff",
      contrastText: "#fff",
    },
    divider: "rgba(0,0,0,0)",
    text: {
      primary: "#fff",
      secondary: "rgba(255,255,255,0.7)",
      disabled: "#d1d1d1",
    },
  },
  };
const theme = createTheme(themeOptions);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);