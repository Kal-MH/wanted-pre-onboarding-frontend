import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import { todoReducer } from "./todos";

const rootReducer = combineReducers({ todoReducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export type RootType = ReturnType<typeof rootReducer>;
