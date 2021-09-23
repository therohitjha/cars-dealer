import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CarProvider } from "./context";

ReactDOM.render(
  <CarProvider>
    <Router>
      <App />
    </Router>
  </CarProvider>,

  document.getElementById("root")
);
