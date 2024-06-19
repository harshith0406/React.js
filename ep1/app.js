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
const root = ReactDOM.createRoot(document.getElementById("root")); //object

root.render(parent);
