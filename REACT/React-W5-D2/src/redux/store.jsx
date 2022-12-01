import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { snackReducer } from "./snackReducer";

const store = createStore(snackReducer, applyMiddleware(logger));

export const AppProvider = ({ children }) => 
    <Provider store={store}>{children}</Provider>;