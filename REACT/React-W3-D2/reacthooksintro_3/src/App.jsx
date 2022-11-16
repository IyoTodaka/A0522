import { useEffect, useReducer } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import useLocalStorage from "./hooks/useLocalStorage";
import useDebounce from "./hooks/useDebounce";
import { articleReducer } from "./reducers/articleReducer";

//.env file --> VITE_BASE_URL="https://hn.algolia.com/api/v1/search?query="

const App = () => {
  const [articles, dispatchArticles] = useReducer(articleReducer, {
    data: [],
    isError: false,
    isLoading: false
  });
  const [searchTerm, setSearcTerm] = useLocalStorage("search", "React");
  const debounceSearchTerm = useDebounce(searchTerm, 500);

  const fetchArticles = async () => {
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
  }, [debounceSearchTerm]);

  const handleSearch = (e) => {
    setSearcTerm(e.target.value);
  };

  return (
    <>
      <h1>Hacker News</h1>
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
      <List list={articles.data} />
    </>
  );
};

export default App;
