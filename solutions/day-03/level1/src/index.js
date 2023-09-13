import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { products, users } from "./modules/database";
import {
  signUp,
  signIn,
  likeProduct,
  rateProduct,
  averageRating,
} from "./modules/interactions";

let logText = "";
function log(string) {
  logText += string + "\n";
}

log(signUp("admin", "admin@mail.io", "123secure", users));
log(signUp("admin", "admin@mail.io", "123secure", users));
log(signIn("admin@mail.io", "123securre", users));
log(signIn("admin@mail.io", "123secure", users));
log(rateProduct("fg12cy", "hedfcg", 4, products));
log(rateProduct("eefamr", "hedfcg", 1, products));
log(averageRating("hedfcg", products));
log(averageRating("nonexistent_id", products));
log(averageRating("aegfal", products));
log(likeProduct("fg12cy", "hedfcg", products));
log(likeProduct("fg12cy", "hedfcg", products));

const logElement = (
  <div className="console">
    <h1>Exercise</h1>
    <p>
      Try to make a different custom module in a different file and import it to
      index.js.
    </p>
    <hr></hr>
    <small>
      Info: Modules database.js and interactions.js simulate the usage of a
      webapp.
    </small>
    <h2>Console Output</h2>
    <pre>{logText}</pre>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(logElement);
