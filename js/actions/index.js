// // new game
// export const NEW_GAME = "NEW GAME";
// export const newGame = () => {
//   return {
//     type: NEW_GAME
//   };
// };

// save the user's guessed number
export const USER_GUESS = "USER GUESS";
export const userGuess = newGuess => {
  return {
    type: USER_GUESS,
    guess: newGuess
  };
};

// // "WHAT?" button clicked loads "What Do I Do?"
// export const GAME_INFO = "GAME INFO";
// export const gameInfo = () => {
//   return {
//     type: GAME_INFO
//   };
// };

// // "Got It" button clicked goes back to main component
// export const BACK_TO_GAME = "RETURN TO GAME";
// export const returnToGame = () => {
//   return {
//     type: BACK_TO_GAME
//   };
// };

// // generate a random number and store
// export const NEW_RANDOM_NUMBER = "NEW RANDOM NUMBER";
// export const newRandomNumber = () => {
//   return {
//     type: NEW_RANDOM_NUMBER
//   };
// };

// // display the guess count
// export const CURRENT_GUESS_COUNT = "CURRENT GUESS COUNT";
// export const currentGuessCount = () => {
//   return {
//     type: CURRENT_GUESS_COUNT
//   };
// };

// // check the user guess against the stored number
// export const GUESS_CHECK = "GUESS CHECK";
// export const guessCheck = () => {
//   return {
//     type: GUESS_CHECK
//   };
// };

// // prompt export constiations of hot or based on numerical distance from stored number
// export const WARMER_OR_COLDER = "WARMER OR COLDER";
// export const warmerOrColder = () => {
//   return {
//     type: WARMER_OR_COLDER
//   };
// };

// // declare when game is won
// export const WINNER = "WINNER";
// export const winner = () => {
//   return {
//     type: WINNER
//   };
// };
