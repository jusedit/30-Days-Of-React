import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import avatar from "./images/avatar.png";

// Use the given hexadecimal color generator in the example to create these random colors
// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};
// Use functional component to design the following user card.
const user = {
  firstName: "Jonas",
  lastName: "Nabbefeld",
  title: "Software Developer",
  country: "Germany",
  avatar: avatar,
  skills: [
    "HTML",
    "CSS",
    "JS",
    "PHP",
    "Python",
    "React",
    "MYSQL",
    "Git",
    "WordPress",
    "SEO",
    "jQuery",
    "MariaDB",
  ],
  date: "September 12, 2023",
  colors: [],
};
for (let i = 0; i < 5; i++) {
  user.colors.push(hexaColor());
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>
);
