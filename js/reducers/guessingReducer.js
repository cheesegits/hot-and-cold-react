import { USER_GUESS } from "../actions/index";

export default (
  state = {
    guesses: [],
    guessCount: 0
  },
  action
) => {
  switch (action.type) {
    case "USER_GUESS": {
      // return {...state, action.guess}
    }
  }
};
