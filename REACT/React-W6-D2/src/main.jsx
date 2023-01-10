import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ApoProvider from "./providers/ApoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApoProvider>
      <App />
    </ApoProvider>
  </React.StrictMode>
);
