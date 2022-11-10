import React, { Component } from 'react';
//import images
import LookLeft from '../assets/look-left.jpeg'
import LookRight from '../assets/look-right.jpeg'

class ChallengeOne extends Component {
  //declare the state here
  state = {
    somebooleanvalue: undefined
  };

  //click left/right button handler goes here
  handleDirection = (direction) => {
    if(direction === "left"){
      // this.state.somebooleanvalue = true;
      this.setState({ somebooleanvalue: true })
    }else{
      // this.state.somebooleanvalue = false;
      this.setState({ somebooleanvalue: false })
    }

    console.log(this.state.somebooleanvalue)
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.somebooleanvalue ? LookLeft : LookRight}
            alt=""
          />
        </div>
        <button className="btn" onClick={() => this.handleDirection("left")}>⭠</button>
        <button className="btn" onClick={() => this.handleDirection("right")}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;