import { USER_GUESS } from "../actions/index";

export const guessing = (
  state = {
    guesses: [],
    guessCount: 0
  },
  action
) => {
  switch (action.type) {
    case "USER_GUESS": {
      return { ...state, guessses: [...state.guesses, action.guess] };
    }
    default:
      return { state };
  }
};
