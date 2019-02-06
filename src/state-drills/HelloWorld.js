import React, { Component } from 'react';
import '../App.js';

class HelloWorld extends Component {
  
  state = {
    who: 'test'
  }

  displayWorld = () => {
    this.setState({
        who: 'world'
    })
  }

  displayFriend = () => {
    this.setState({
      who: 'friend'
    })
  }

  displayReact = () => {
    this.setState({
      who: 'react'
    })
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick = {this.displayWorld}>World</button>
        <button onClick = {this.displayFriend}>Friend</button>
        <button onClick = {this.displayReact}>React</button>
      </div>
    );
  }
}

export default HelloWorld;
