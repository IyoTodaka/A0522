import { useState, Component } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App({ firstName, children}) {

  //props are "read-only", you cannot directly mutate it.
  // props.firstName = "Boke"

  return (
    <div className="App">
      {children}
      <h1>{firstName}</h1>
    </div>
  )
}

// class App extends Component {
//   render() {
//     console.log(this);
//     return (
//       <div className="App">
//         {this.props.children}
//         <h1>{this.props.firstName}</h1>
//       </div>
//     );
//   }
// }

export default App;
