import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./app";

import combineReducers from "./reducers/index";
const gameStore = createStore(combineReducers);

ReactDOM.render(
  <Provider store={gameStore}>
    <App />
  </Provider>,
  document.getElementById("app")
);
