import React from "react";

import "./App.css";

import Search from "./components/Search";
import Table from "./components/Table";
import Button from "./components/Button";

const PATH_BASE = "https://hn.algolia.com/api/v1"
const PATH_SEARCH = "/search"
const PARAM_SEARCH = "query=" 
const PARAM_PAGE = "page="

class App extends React.Component {
  state = {
    result: null,
    searchTerm: "twitter"
  }

  //common methods
  setSearchTopStories = (result) => {
    const { hits, page } = result

    const oldHits = page != 0 ? this.state.result.hits : []

    const updatedHits = [...oldHits, ...hits]

    this.setState({ result: { hits: updatedHits, page }})
  }

  fetchSearchTopStories = (searchTerm, page = 0) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e)
  }

  //lifecycle
  componentDidMount(){
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
  }

  //events
  onSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
  onSearchSubmit = (e) => {
    e.preventDefault()
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
  }
  

  render(){
    const { searchTerm, result } = this.state
    const page = (result && result.page) || 0
    return(
      <div className="page">
        <div className="interactions">
          {/* Search Component */}
          <Search 
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>

        {/* Table Component */}
        { result && (<Table list={result.hits} />) }

        <div className="interactions">
          {/* Button Component for more... */}
          <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
            More
          </Button>
        </div>
      </div>
    )
  }
}

export default App;
