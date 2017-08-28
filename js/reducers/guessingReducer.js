export const guessing = (
  state = {
    guesses: [],
    guessCount: 0
  },
  action
) => {
  switch (action.type) {
    case "USER_GUESS": {
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess],
        guessCount: state.guessCount + 1
      });
    }
    case "NEW_GAME": {
      console.log("guessingReducer state: ", state);
      return state;
    }
    default:
      return state;
  }
};
