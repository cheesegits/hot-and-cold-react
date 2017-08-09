import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
// import { action1, action2 } from "./actions/index";
// import css

// App
class App extends Component {
  // App goes here
}

App.PropTypes = {
  // guess: PropTypes.number
};

// map State and export
const mapStateToProps = state => {
  return {
    // guesses: state.guesses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onGuess: guess => dispatch(actionFunctionNameHere(guess)),
    // onInfo: () => dispatch(actionFunctionNameHere())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
