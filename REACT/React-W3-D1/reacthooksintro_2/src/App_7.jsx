import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const endpoint = "https://api.github.com/users/";

  const [user, setUser] = useState(null);
  const searchInput = useRef();

  useEffect(() => {
    getUser();
  }, []);

  //co-location
  const getUser = async () => {
    const response = await fetch(endpoint + "andasan");
    const result = await response.json();
    console.log(result);
    setUser(result);
  };

  const handleClearInput = () => {
    searchInput.current.value = "";
  };

  return (
    <>
      <input
        type="text"
        placeholder="Github user"
        ref={searchInput}
      />
      <button onClick={getUser}>Search</button>
      <button onClick={handleClearInput}>Clear</button>

      <br/>
      {user ? (
        <>
          <img src={user.avatar_url} alt={user.login} style={{ height: 50 }} />
          <h2>{user.login}</h2>
        </>
      ) : (
        <h2>Loading.....</h2>
      )}
    </>
  );
}

export default App;
