function randomNumberGenerator() {
  return Math.floor(Math.random() * 100 + 1);
}

var winningNumber = randomNumberGenerator();

export const checking = (
  state = {
    actual: winningNumber,
    hotOrCold: "Make Your Guess"
  },
  action
) => {
  switch (action.type) {
    case "USER_GUESS": {
      var actual = state.state.actual;
      var guess = action.guess;
      function difference(a, b) {
        return Math.abs(a - b);
      }
      var hotOrColdValue = difference(actual, guess);
      if (hotOrColdValue === 0) {
        return {
          ...state,
          hotOrCold: "You Won.  Click new game to play again"
        };
      } else if (hotOrColdValue <= 9) {
        return {
          ...state,
          hotOrCold: "hot"
        };
      } else if (hotOrColdValue <= 19) {
        return {
          ...state,
          hotOrCold: "kinda hot"
        };
      } else if (hotOrColdValue <= 29) {
        return {
          ...state,
          hotOrCold: "less than warm"
        };
      } else {
        return {
          ...state,
          hotOrCold: "cold"
        };
      }
    }
    case "NEW_GAME": {
      winningNumber = randomNumberGenerator();
      return { state };
    }
    default:
      return { state };
  }
};
