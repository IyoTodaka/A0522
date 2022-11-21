import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

import "./index.css";

import AppRoute from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Router>
      <AppRoute />
    </Router>
  </ThemeProvider>
);
