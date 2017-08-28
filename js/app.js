import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { dispatch } from "redux";
import { userGuess, newGame } from "./actions/index";
import GameInfo from "./components/gameInfo";

// App
class App extends Component {
  constructor(props) {
    super(props);
    this.onNewGuess = this.onNewGuess.bind(this);
    this.onNewGame = this.onNewGame.bind(this);
  }
  onNewGame() {
    this.props.dispatch(newGame());
  }
  onNewGuess() {
    this.guess.focus();
    var guess = this.guess.value;
    this.props.dispatch(userGuess(guess));
    this.guess.value = "";
  }
  renderPreviousGuesses(guesses) {
    const listGuesses = guesses.map(guess => {
      return (
        <li>
          {guess}
        </li>
      );
    });
    return listGuesses;
  }
  render() {
    return (
      <div>
        <div>
          <GameInfo />
          <button onClick={this.onNewGame}>+New Game</button>
        </div>
        <div>
          <h2>HOT or COLD</h2>
        </div>
        <div>
          <p>
            {this.props.checking.hotOrCold}
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your Guess"
            ref={input => {
              this.guess = input;
            }}
          />
          <button onClick={this.onNewGuess}>Guess</button>
          <p>
            Guess#{this.props.guessing.guessCount}!
          </p>
        </div>
        <div>
          <ul>
            {this.renderPreviousGuesses(this.props.guessing.guesses)}
          </ul>
        </div>
      </div>
    );
  }
}

App.PropTypes = {
  guess: PropTypes.number,
  guesses: PropTypes.number
};

// map State and export
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
