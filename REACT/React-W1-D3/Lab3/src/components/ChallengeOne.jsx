import React, { Component } from 'react';
//import images

class ChallengeOne extends Component {
  //declare the state here
  state = {
  };

  //click left/right button handler goes here

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src=""
            alt=""
          />
        </div>
        <button className="btn">⭠</button>
        <button className="btn">⭢</button>
      </>
    );
  }
}

export default ChallengeOne;