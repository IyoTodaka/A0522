import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header, { sayHello } from "./Header";
import "./index.css";

const isReact = true;
const name = "Mateus"
const greeting = (
  <div style={{ backgroundColor: "red", color: "blue" }}>
    <h1 className="header">Hello {name}!!!!</h1>
    <p id="paragraph">Welcome to React!</p>
    <input />
    <img />
  </div>
);

function sayGreeting() {
  if (isReact) {
    return greeting;
  } else {
    return <div>Hello Isaac!</div>;
  }
}

// ReactDOM.createRoot(document.getElementById("root")).render(sayGreeting());
ReactDOM
  .createRoot(document.getElementById("root"))
  .render(
    <App firstName={name}><Header /></App>
  );
