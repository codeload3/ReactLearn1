// var React = require("react");
// var ReactDOM = require("react-dom");

// new way of using modules in the new js
import React from "react";
import ReactDOM from "react-dom";

// React renders HTML to the web page by using a function called render().
// The purpose of the function is to display the specified HTML code inside the specified HTML element.

// ReactDOM.render(WHAT TO RENDER, WHERE TO RENDER);
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
// Note: .render method only takes one HTML element at a time
// however we can embed multiple HTML elements into one element like:
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragragph</p>
  </div>,
  document.getElementById("root")
);

// React works by creating JSX files where we've got HTML right in the body of a JS file
// The compiler that compiles the HTML into JS comes from the "react" module
// "react" module has a JS compiler called Babel which converts next gen JS code into plain old JS code

// performing the same operation using lengthy old JS code
var h1 = document.createElement("h1");
h1.innerHTML = "Hello world again!";
document.getElementById("root").appendChild(h1);
