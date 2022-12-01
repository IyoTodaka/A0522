import React, { useEffect } from "react";
import "./App.css";
import SnacksInventory from "./containers/SnacksInventory";
import DrinksInventory from "./containers/DrinksInventory";

function App() {
  // function A(){
  //   return "hello"
  // }
  // const B = (stringObj) => {
  //   return stringObj.text
  // }
  // const shortB = () => "bye"

  useEffect(() => {
    dispatch(fetchData) 
}, [])

  return (
    <div className="container">
      <SnacksInventory />
      <DrinksInventory />
    </div>
  );
}

export default App;
