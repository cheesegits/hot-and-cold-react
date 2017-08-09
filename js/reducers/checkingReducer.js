import { USER_GUESS } from "../actions/index";

function randomNumberGenerator() {
  return Math.floor(Math.random() * 100 + 1);
}

var winningNumber = randomNumberGenerator();

export default (
  state = {
    guess: null,
    actual: winningNumber
  },
  action
) => {
  switch (action.type) {
    case "USER_GUESS": {
      // compare action.guess with state.actual
      // return {...state, action.guess}
    }
  }
};
