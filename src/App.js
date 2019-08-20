import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    // state property is inside the component and
    // we can only access it when a class extends from Component class.
    // We cannot do this in the functional component. State is the data of the component.
    // State can change but if it changes it leads  React to re-render the DOM or update the DOM.
    state = {
      person :[
          {name:'Max',age:28},
          {name:'Manu',age:27}
      ]
    };

    switchAttributeHandler = () => {
        //setState update the virtual DOM which then change the actual DOM.
        this.setState({
            person :[
                {name:'Alexander',age:28},
                {name:'Manu',age:25}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={this.switchAttributeHandler}>Switch Attribute</button>
                {/* we can take these attributes and get inside the receiving*/}
                {/*component on object named props.*/}
                <Person
                    name={ this.state.person[0].name }
                    age={ this.state.person[0].age }
                    click={this.switchAttributeHandler}
                />
                <Person
                    name={ this.state.person[1].name }
                    age={ this.state.person[1].age } />
            </div>
        );
    }
}

export default App;