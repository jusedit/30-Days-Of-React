import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Create functional components and display the following image
import techsImage from "./images/frontend_technologies.png";
const TechsElem = () => <img src={techsImage} alt="Web Technologies" />;

// Use functional component to create the following design
const buttonText = "Subscribe";
const title = "SUBSCRIBE";
const subTitle = "Sign up with your email address to receive news and updates";
function Subscribe() {
  return (
    <div className="dialog">
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <div>
        <input type="text" name="firstname" placeholder="First Name" />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}

const app = (
  <main>
    <Subscribe />
    <TechsElem />
  </main>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
