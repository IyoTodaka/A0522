import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import 'bulma/css/bulma.min.css';

import AppRoute from './routes/AppRoute';

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
      <AppRoute />
    </Router>
);
