import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/main.css";

import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
AOS.refresh();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
