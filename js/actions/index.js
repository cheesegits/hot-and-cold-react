// new game
export const NEW_GAME = "NEW_GAME";
export const newGame = () => {
  return {
    type: NEW_GAME
  };
};

// save the user's guessed number
export const USER_GUESS = "USER_GUESS";
export const userGuess = newGuess => {
  return {
    type: USER_GUESS,
    guess: newGuess
  };
};
