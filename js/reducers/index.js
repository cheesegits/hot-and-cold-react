import { combineReducers } from "redux";

import { guessing } from "./guessingReducer";
import { checking } from "./checkingReducer";

export const gameReducers = combineReducers({
  guessing,
  checking
});

export const rootReducer = (state, action) => {
  if (action.type === "NEW_GAME") {
    state = undefined;
  }
  return gameReducers(state, action);
};
