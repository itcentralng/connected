import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { theme } from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
    <App />
  </React.Fragment>
);
