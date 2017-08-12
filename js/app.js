import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { userGuess } from "./actions/index";

// App
class App extends Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

// App.PropTypes = {
//   guess: PropTypes.number,
//   onGuess: PropTypes.func,
//   guesses: PropTypes.number
// };

// map State and export
const mapStateToProps = state => {
  return {
    guesses: state.guesses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGuess: guess => dispatch(userGuess(guess))
  };
};
// onInfo: () => dispatch(actionFunctionNameHere())

export default connect(mapStateToProps, mapDispatchToProps)(App);
module.exports = App;
