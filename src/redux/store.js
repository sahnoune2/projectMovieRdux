import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { reducer } from "./reducer";
import { thunk } from "redux-thunk";
import { reducerUser } from "./reducerUser";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //

const combinedReducer = combineReducers({
  movies: reducer,
  users: reducerUser,
});
export const store = createStore(
  combinedReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)) // so that i can use async functions
);
