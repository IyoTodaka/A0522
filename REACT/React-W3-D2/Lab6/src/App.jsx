import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const getPostsData = () => {
    console.log("Fetching...")
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((data) => setData(data.data))
      .catch((error) => setError(error.message));
  };

  if(!data){
    getPostsData();
  }

  return (
    <div className="App">
      <h1>React Lab 6</h1>
      <p className="msg">
        {data ? JSON.stringify(data[0]) : error ? error : "loading"}
      </p>
      <button className="btn" onClick={() => getPostsData()}>Refetch</button>
    </div>
  );
}

export default App;
