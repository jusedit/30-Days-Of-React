import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import techsImage from "./images/frontend_technologies.png";

// Create functional components and display the following image
const Image = (props) => <img src={props.image} alt={props.alt} />;

// Use functional component to create the following design
function Subscribe({ title, subTitle, buttonText }) {
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

const title = "SUBSCRIBE";
const subTitle = "Sign up with your email address to receive news and updates";
const buttonText = "Subscribe";
const app = (
  <main>
    <Subscribe title={title} subTitle={subTitle} buttonText={buttonText} />
    <Image image={techsImage} alt="Web Technologies" />
  </main>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
