import { combineReducers, createStore } from "redux";

import { todoReducer } from "./todos";

const rootReducer = combineReducers({ todoReducer });

export const store = createStore(rootReducer);

export type RootType = ReturnType<typeof rootReducer>;
