import React from "react";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const initialState = Object.freeze({
  error: null,
  items: [],
  isFetching: false,
  selectedAccount: "andasan"
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REPOS_REQUEST":
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case "FETCH_REPOS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        items: action.payload
      };
    case "FETCH_REPOS_ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

//fetch function
const fetchGithubRepos = () => (dispatch, getState) => {
  dispatch({ type: "FETCH_REPOS_REQUEST" });
  console.log("Initial state: ", getState());
  fetch(`https://api.github.com/users/andasan/repos`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      dispatch({ type: "FETCH_REPOS_SUCCESS", payload: result });
      console.log("Updated state: ", getState());
    })
    .catch((error) => {
      dispatch({ type: "FETCH_REPOS_ERROR", payload: error });
    });
};

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchGithubRepos());

function Module2() {
  return (
    <>
      <p>Inspect the console</p>
    </>
  );
}

export default Module2;
