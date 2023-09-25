import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { tenHighestPopulation } from "./data/ten_most_highest_populations";

const maxPopulation = tenHighestPopulation.reduce(
  (max, { population }) => (max > population ? max : population),
  0
);
function Country({ country, population }) {
  return (
    <div className="country">
      <div className="name">{country}</div>
      <div className="chart">
        <div
          className="inner"
          style={{ width: (population / maxPopulation) * 100 + "%" }}
        ></div>
      </div>
      <div className="amount">{population.toLocaleString()}</div>
    </div>
  );
}
function Countries({ data }) {
  return (
    <div className="countries">
      {data.map(({ country, population }, i) => (
        <Country key={i} country={country} population={population} />
      ))}
    </div>
  );
}

const Screen = ({ title, sub, text, inner }) => (
  <div className="container">
    <h1>{title}</h1>
    <h2>{sub}</h2>
    <p>{text}</p>
    {inner}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Screen
      title="30 Days Of React"
      sub="World Population"
      text="Ten most populated countries"
      inner={<Countries data={tenHighestPopulation} />}
    />
  </React.StrictMode>
);
