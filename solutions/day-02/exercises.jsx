// Exercises: What is React?
// What is React?

// React is a UI library to create reusable UI components. It handles the interaction with the DOM.
// The component-based architecture allows to build entire web applications.

// What is a library?

// A collection of pre-written JavaScript Code that makes it easier to develop applications.

// What is a single page application?

// A web application which initially loads a single HTML file.
// The components of the file are dynamically generated and updated as the user interacts with the website.
// Note: SPA's can contain more than one HTML file, but typically don't require a full page reload when navigating.

// What is a component ?

// A component is a reusable UI element, that can be composed together to build a web application.

// What is the latest version of React?

// 18.2.0

// What is DOM?

// The Document Object Model is a collection of objects, that represent the content of a website.

// What is React Virtual DOM?

// The React Virtual DOM is a internal representation that React uses to handle the "real" DOM.

// What does a web application or a website(composed of) have?

// A web application or website is typically composed of various components:
// Front-end: HTML, CSS, JavaScript
// Assets: Images, videos and other static files
// Back-end: Databases and server-side code.

//Exercises: Why React?
//Why did you chose to use react?

// Component based architecture allows to create reusable and maintainable UI components
// Large ecosystem with tools and libraries
// Has a large community and is used by many large companies and startups
// Well maintained library with frequent updates

// What measures do you use to know popularity ?

// Job market postings frequently mention React
// GitHub Stars and Forums show user engagement
// Google Trends shows search volume
// Prominent companies use React

// What is more popular, React or Vue ?

// Both are among the most popular frameworks for web application development.
// React seems to have more tutorials and better developer satisfaction according to surveys.
// According to Statista, React is the most used web framework worldwide, leaving VueJS behind.

// Exercises: JSX
// What is an HTML element?

// It has a opening tag containing attributes and optionally a closing tag.
// Self-contained tags do not have content.
// Others can have content between the opening and closing tag.

// How to write a self closing HTML element?

// <tag />

// What is an HTML attribute? Write some of them

// Attributes reside inside the opening tag and specify details of the element.
// Examples:
// style: specifies inline CSS
// src: specifies a path for the content of img or iframe elements
// type: defines the type of input elements (number, text, date)

// What is JSX?

// JSX stands for JavaScript XML. JSX is a format that allows to combine HTML and JavaScript markup.

// What is babel?

// Babel is a widely used JavaScript transpiler, its primary function is to transpile JavaScript and JSX code.

// What is a transpiler?

// A transpiler is a tool that converts code from one language or format to another.
// Babel for example translates JSX to HTML and JavaScript.

// Exercises: JSX Elements
// What is a JSX element?

// A JSX element consists of one or more HTML elements and is stored in a JavaScript variable.

// Write your name in a JSX element and store it in a name variable

const myName = <h1>Jonas Nabbefeld</h1>;

// Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable

const user = (
  <div className="user">
    <h1>Jonas Nabbefeld</h1>
    <p>Country: Germany</p>
    <p>Title: Software Developer</p>
    <p>Gender: Male</p>
    <p>Email: example@mail.com</p>
    <p>Phone: +49 1111 2345 678</p>
  </div>
);

// Write a footer JSX element

const footer = (
  <footer>
    <p>Copyright 2023</p>
  </footer>
);
