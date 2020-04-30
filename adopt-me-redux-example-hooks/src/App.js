import React from "react";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import Details from "./components/Details";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
