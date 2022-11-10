import React from "react";
import "./App.css";

class Binding extends React.Component {
  constructor(){
    super();

    this.state = {
      firstName: "Jun"
    }

    this.onClickMe = this.onClickMe.bind(this)
  }
  // state = {
  //   firstName: "Jun"
  // };
  //auto binding
  // onClickMe = () => {
  //   console.log(this.state.firstName);
  // }

  onClickMe() {
    console.log(this.state.firstName);
  }

  render() {
    return <button onClick={this.onClickMe}>Haro~</button>;
  }
}

export default Binding;
