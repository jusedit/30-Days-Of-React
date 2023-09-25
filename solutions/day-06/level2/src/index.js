import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Numbers from "./Numbers";

let amountNumbers = 32;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>30 Days Of React</h1>
    <p>Number Generator</p>
    <Numbers amount={amountNumbers} />
  </React.StrictMode>
);
