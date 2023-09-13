import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import and render the following image
import techsImage from "./images/frontend_technologies.png";

const techsElem = <img src={techsImage} alt="Web Technologies" />;

// Use h1, p, input and button HTML elements to create the following design using JSX

const subscribe = (
  <div className="dialog">
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates</p>
    <div>
      <input type="text" name="firstname" placeholder="First Name" />
      <input type="text" name="lastname" placeholder="Last Name" />
      <input type="email" name="email" placeholder="Email" />
    </div>
    <div>
      <button>Subscribe</button>
    </div>
  </div>
);

const app = (
  <main>
    {subscribe}
    {techsElem}
  </main>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
