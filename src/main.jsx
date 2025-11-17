import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import About from "./components/About";  

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter basename="/">
        <Routes>
          {/* Home */}
          <Route path="/" element={<App />} />

          {/* Standalone About page */}
          <Route path="/about" element={<About />} />

          {/* Fix: Any unknown route → fallback to home */}
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  </React.StrictMode>
);
