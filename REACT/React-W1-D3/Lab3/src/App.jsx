import { Component } from 'react';
import ChallengeOne from './components/ChallengeOne'

class App extends Component{

  render(){
    return (
      <div className="App">
        <h1>React Lab 3</h1>
        {/* Import Components (ChallengeOne and Challenge Two) here */}
        <ChallengeOne />
      </div>
    );
  }
}


export default App;