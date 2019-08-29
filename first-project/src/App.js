import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    username: 'supermax'
  }

  usernameChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <UserInput 
        changed = {this.usernameChangeHandler}
        currentName = {this.state.username} />
        <UserOutput userName = {this.state.username}/>
        <UserOutput userName = {this.state.username}/>
        <UserOutput userName = "Max"/>
      </div>
    );
  }
}

export default App;
