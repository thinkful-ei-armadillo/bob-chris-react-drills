import React, { Component } from 'react';
import '../App.js';

class HelloWorld extends Component {

  state = {
    chamber: null,
    spinningTheChamber: false
  }

  timeout = () => {
    setTimeout(() => this.setState({
      chamber: Math.ceil(Math.random() * 8),
      spinningTheChamber: false
    }), 2000)   
  }


  clickHandler = () => {
    this.setState({
      spinningTheChamber: true,
    });
    //timeout for 2 seconds

    this.timeout();
    }

  generateString = () => {
    if (this.state.spinningTheChamber === true) {
      return 'spinning the chamber and pulling the trigger!'
    }
    else if (this.state.chamber === this.props.bulletInChamber) {
      return 'BANG!!!!'
    }
    else {
      return 'you\'re safe'
    }
  };

  componentWillUnmount() {
    return clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        <p>{this.generateString()}</p>
        <button onClick = {this.clickHandler}>Pull the trigger!</button>
      </div>
    );
  }
}

export default HelloWorld;
