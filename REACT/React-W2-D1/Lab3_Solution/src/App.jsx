import { Component } from 'react';

import ChallengeOne from './components/ChallengeOne';
import ChallengeTwo from './components/ChallengeTwo';
class App extends Component{

  render(){
    return (
      <div className="App">
        <h1>React Lab 3</h1>
        {/* Import Components (ChallengeOne and Challenge Two) here */}
        {/* <ChallengeOne /> */}
        <ChallengeTwo />
      </div>
    );
  }
}

export default App;