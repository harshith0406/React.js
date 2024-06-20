import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world from react "
);

// const root = ReactDOM.createRoot(document.getElementById("root")); //object

// root.render(heading);

/* <div>
  <div>
  <h1>Hello all</h1>
  </div>  
</div> */
// react element which is a object is converted to a HTML which the browser will understand and render.
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    [React.createElement("h1", {}, "parent1"),React.createElement("h1", {}, "parent2")]
  )
);
//this code is transpiled before even the thing is passed to the browser and its done by parcel--babel

const root = ReactDOM.createRoot(document.getElementById("root")); //object
//react element
const jsx = <h1>Namaste react using JSX</h1>

//jsx is not html it has like html syntax
//jsx converted to the react object and then the react object is then compiled to html


//react functional component
const HeadingC = () =>
  <>
  <h1>Heading {number}</h1>;
  {jsx}
 </>

const HeadingComp = () => {
  <h1>Heading</h1>;
};
const number = 1000;
const Hello = () => (<h1>Hello</h1>);


//root.render(jsx);->conventional way of rendering the react elements

root.render(<HeadingC />)
//this is way to render all the react functional components

//component composition is nothing but a component inside component