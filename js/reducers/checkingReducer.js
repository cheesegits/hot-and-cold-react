import { USER_GUESS } from "../actions/index";

function randomNumberGenerator() {
  return Math.floor(Math.random() * 100 + 1);
}

var winningNumber = randomNumberGenerator();

export const checking = (
  state = {
    guess: null,
    actual: winningNumber
  },
  action
) => {
  switch (action.type) {
    case "USER_GUESS": {
      return { ...state, guess: action.guess };
    }
    default:
      return { state };
  }
};
