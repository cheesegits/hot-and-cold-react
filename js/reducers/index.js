import { combineReducers } from "redux";

import { guessing } from "./guessingReducer";
import { checking } from "./checkingReducer";

export const gameReducers = combineReducers({
  guessing,
  checking
});

/* Missing Reducers/state for:

  - gameInfo
    - modal visible default is false, becomes true when "What ?" button is clicked
      - change to false when "Got it" button is clicked

  - New Game
    - return to default state
    - generate new random number    
    - reset UI
      - clear guesses
      - clear guess count
      - clear warmer/colder
*/
