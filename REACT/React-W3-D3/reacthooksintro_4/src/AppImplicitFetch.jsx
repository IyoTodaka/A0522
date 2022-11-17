import { useState, useEffect, useReducer, useCallback } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import List from "./components/List";
import useLocalStorage from "./hooks/useLocalStorage";
import useDebounce from "./hooks/useDebounce";
import { articleReducer } from "./reducers/articleReducer";

const App = () => {
  const [forFun, setForFun] = useState(true);
  const [articles, dispatchArticles] = useReducer(articleReducer, {
    data: [],
    isError: false,
    isLoading: false
  });
  const [searchTerm, setSearcTerm] = useLocalStorage("search", "React");
  const debounceSearchTerm = useDebounce(searchTerm, 500);

  const fetchArticles = async () => {
    console.log('fetching....')
    try {
      dispatchArticles({ type: "ARTICLES_FETCH_INIT" });
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}${searchTerm}`
      );
      const result = await response.json();
      dispatchArticles({
        type: "ARTICLES_FETCH_SUCCESS",
        payload: result.hits
      });
    } catch (error) {
      dispatchArticles({ type: "ARTICLES_FETCH_FAILURE" });
    }
  };
  
  useEffect(() => {
    //Re-fetching all data each time someone types in the input field isn’t optimal.
    fetchArticles();
  }, [debounceSearchTerm]);

  const handleSearch = (e) => {
    setSearcTerm(e.target.value);
  };

  const handleRemoveArticle = (id) => {
    dispatchArticles({ type: "REMOVE_ARTICLE", payload: id})
  }

  return (
    <>
      <h1>Hacker News</h1>
      <button onClick={() => setForFun(!forFun)}>
        Toggle : {forFun ? "TRUE" : "FALSE"}
      </button>
      <br/>

      <Input
        isFocused
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        Search:&nbsp;
      </Input>
      <button onClick={fetchArticles}>Refetch</button>
      <hr />
      {articles.isLoading && <div>Loading.......</div>}
      {articles.isError && <div>Something went wrong...</div>}
      <List list={articles.data} onRemoveItem={handleRemoveArticle} />
    </>
  );
};

export default App;
