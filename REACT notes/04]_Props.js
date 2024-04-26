// Props

// - Props are the information that you pass to a JSX tag.

//---------------------------------------------------------------------------------------------------------------------------------------

// for e.g

// Parent Component
<ChildComponent name="John" age={30} />

// Child Component
function ChildComponent(props) {
  return <div>Name: {props.name}, Age: {props.age}</div>;
}


//---------------------------------------------------------------------------------------------------------------------------------------

// Key Points:

// - Props enable parent components to pass data to child components.
// - Props are immutable and flow downwards from parent to child components.
// - Components can define default props to provide fallback values.
// - Props facilitate communication and data sharing between components in a React application.

//---------------------------------------------------------------------------------------------------------------------------------------
