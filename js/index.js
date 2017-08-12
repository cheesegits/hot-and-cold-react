import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import gameStore from "./store/gameStore";

import App from "./app";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Provider store={gameStore}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
});
