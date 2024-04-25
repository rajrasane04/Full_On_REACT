// Component

// - Component is a reusable and independant piece of code
// - In component , it can only return one parent element i.e one HTML tag , and while others being the child is allowed to the parent element 

//---------------------------------------------------------------------------------------------------------------------------------------

// Creating a component

// for e.g
function Title(){
    return(
        <h1>Hello World!</h1>
        // <Title/>  //-> This is how we render a Component
    );
}

//---------------------------------------------------------------------------------------------------------------------------------------

// Rendering a Component

// for e.g 

// <Title></Title>   // or     // <Title/>

//---------------------------------------------------------------------------------------------------------------------------------------

// Importing and Exporting a Component

// for e.g:-

// 1) Import 
import Title from "./Title.jsx";

// 2) Default Export     ->->used for exporting single component from a file
export default Title;

// 3) Named Export       ->used for exporting multiple component from a file
export{Title,Card,Menu};
import {Title} from "./Title.jsx"

//---------------------------------------------------------------------------------------------------------------------------------------

// Styling a Component 

// - For applying CSS for any component , we create a seperate CSS file from the same component name.
// - Then we apply all of our CSS to the className of the root element i.e div of component.
// - And applying the changes of styles in CSS file to our component we import our CSS file with same name
//  to our component file or JSX file . Like => import './Product.css';

//---------------------------------------------------------------------------------------------------------------------------------------