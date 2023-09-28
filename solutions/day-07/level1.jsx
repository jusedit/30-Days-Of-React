// How do you write a pure JavaScript function

function functionName(vars){
    return false;
}


// What is inheritance and how do you make a child from a parent class?

// Inheritance is when a class extends another class and therby inherits vars and functions of the parent class
class A extends B{
    constructor(props){
        super(props);
    }
    doSomething(){
        return "yes";
    }
}

// What is class based React component ?

// A class based component extends React.component and can have a constructor function

// What is the difference between functional React component and class based React component ?

// Functional Components are plain JS functions that return JSX. Class based react components extend the React.component class and return JSX whit the render function.

// When do we need to use class based components instead of functional components

// When writing complex components that need methods

// What is the use cases of class based component ?

// They have error boundaries catching every error on the tree below
// They have life cycle hooks

// Which type of component do use most frequently ? functional or class-based component

// Functional components because most components don't require complex logic and in newer versions of react hooks and ErrBoundary allows the same functionality for functional components