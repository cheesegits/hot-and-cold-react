import { createStore } from "redux";
import { gameReducers } from "../reducers/index";

export default createStore(
  gameReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
