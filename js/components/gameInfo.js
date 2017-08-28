import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

class GameInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  open() {
    console.log(this);
    this.setState({ showModal: true });
  }
  close() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="small" onClick={this.open}>
          Game Info
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>What do I do?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              This is a Hot or Cold Number Guessing Game. The game goes like
              this:
            </p>
            <ol>
              <li>
                I pick a random secret number between 1 to 100 and keep it
                hidden.
              </li>
              <li>
                You need to guess until you can find the hidden secret number.
              </li>
              <li>
                You will get feedback on how close ("hot") or far ("cold") your
                guess is.
              </li>
            </ol>
            <p>So, Are you ready?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Got it!</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

module.exports = GameInfo;
