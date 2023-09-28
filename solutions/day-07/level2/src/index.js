import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Numbers from "./Numbers";
import Colors from "./Colors";

let amountItems = 32;

class Screen extends React.Component {
  render() {
    const { title, sub, inner } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <p>{sub}</p>
        {inner}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Screen
      title="30 Days Of React"
      sub="Number Generator"
      inner={<Numbers amount={amountItems} />}
    />
    <Screen
      title="30 Days Of React"
      sub="Hexadecimal Colors"
      inner={<Colors amount={amountItems} />}
    />
  </React.StrictMode>
);
