// What is the difference between a regular function and an arrow function?

// The syntax. Regular: function add(a,b){return a+b;} Arrow: const add = (a,b) => a+b;
// The conext of this is dynamic for regular functions while being the enclosing scope for arrow functions.
// The arguments variable is not available for arrrow functions
// Arrow functions can not be constructed

// What is a React Component?

// A React component is a reusable function or class that returns a JSX element.

// How do you make a React functional component?

// By using function (arrow or regular) to return a component with dynamic content by using variables or functions

// What is the difference between a pure JavaScript function and a functional component?

// A component can be included as JSX: <Component />
// A functional component is specific to React and is used to build user interfaces by returning JSX.

// How small is a React component?

// The smallest React component returns only one element
// It is also possible to return a tree
// Components can have only one root element

// Can we make a button or input field component?

// Yes

// Make a reusable Button component.

// const Button = () => <button>Button</button>;

// Make a reusable InputField component.

// const Input = () => <input type="text" />;

// Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).

// const alertMessage = "Warning";
// const AlertBox = () => { return ( <div> <p>{alertMessage}</p> </div> ); };