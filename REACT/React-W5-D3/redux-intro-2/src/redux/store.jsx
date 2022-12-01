import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import rootReducer from "./reducers";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(logger, thunk));
const persistor = persistStore(store)

export const AppProvider = ({ children }) => 
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            {children} 
        </PersistGate>
    </Provider>;