import React from "react";
import "./App.css";

class FetchAPI extends React.Component {
  state = {
    results: [],
  }

  fetchCharacters = () => {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(({ results }) => this.setState(({ results })))
      .catch(e => e)
  }

  componentDidMount(){
    console.log("I will only be called once!")
    this.fetchCharacters()
  }
  
  render(){
    const { results } = this.state
    console.count("this is a re-render");
    return results.map(chara => (
      <h1 key={chara.created} onClick={this.fetchCharacters}>{chara.name}</h1>
    ));
  }
}

export default FetchAPI;
