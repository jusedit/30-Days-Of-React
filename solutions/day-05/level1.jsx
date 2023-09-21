// What is props in a React component ?

// A default property for functional components to get data from the JSX parameters:
// <Component parameter="value">
// console.log(props.parameter)

// How do you access props in a React component ?

// by using the props parameter or deconstructing props in the parentheses:
// const Component = (props) => <p>{props.parameter}</p>
// const Component = ({parameter}) => <p>{parameter}</p>

// What data types can we pass as props to components ?

// Props can hold any JavaScript value.
// Examples: String, Number, Bolean, Array, Object, Function etc.

// What is a propTypes?

// A package to help us set property data types
// Helps to catch errors

// What is a defaultProps?

// A way to set defaults for property values
// Helps component to stay functional when omitting parameters