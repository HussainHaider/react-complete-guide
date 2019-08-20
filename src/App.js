import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* we can take these attributes and get inside the receiving*/}
        {/*component on object named props.*/}
        <Person name="Max" age="28"/>
          <Person name="Manu" age="29">My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
