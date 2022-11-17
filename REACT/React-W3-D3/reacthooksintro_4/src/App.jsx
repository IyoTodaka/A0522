import { useState, useEffect, useReducer, useCallback } from "react";
import "./App.css"; //local to App and its children components
import SearchForm from "./components/SearchForm";
import List from "./components/List";
import useLocalStorage from "./hooks/useLocalStorage";
import useDebounce from "./hooks/useDebounce";
import { articleReducer } from "./reducers/articleReducer";

const App = () => {
  const [articles, dispatchArticles] = useReducer(articleReducer, {
    data: [],
    isError: false,
    isLoading: false
  });
  const [searchTerm, setSearcTerm] = useLocalStorage("search", "React");

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
    fetchArticles();
  }, []);

  const handleSearch = (e) => {
    setSearcTerm(e.target.value);
  };

  const handleRemoveArticle = (id) => {
    dispatchArticles({ type: "REMOVE_ARTICLE", payload: id})
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchArticles()
  }

  return (
    <>
      <h1>Hacker News</h1>

      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearch}
        onSearchSubmit={handleSubmit}
      />
    
      <hr />
      {articles.isLoading && <div>Loading.......</div>}
      {articles.isError && <div>Something went wrong...</div>}
      <List list={articles.data} onRemoveItem={handleRemoveArticle} />
    </>
  );
};

export default App;
