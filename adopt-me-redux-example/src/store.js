import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,
  // check if we're in the browser and the redux devtools exists
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__() // call the function
    : f => f // otherwise just give some random function to use
);

export default store;
